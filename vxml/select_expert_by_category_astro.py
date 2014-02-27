from twisted.internet import defer
from txappengine.configuration import ConfigManager
from openlibs.voip.vxml.documentloader import ContentLoadResult

PAGE_LENGTH = 9

def get_general_error_content():
    return '''<vxml>
        <form>
          <block>
            <goto next="wdeal:///astroconsult/goto_teller.xml"/>
          </block>
        </form>
    </vxml>
    '''

def get_no_available_expert_content():
    return '''<vxml>
        <import module="wdeal" system="true"/>
        <form>
          <block>
            <prompt>
              <audio expr="wdeal.fedora('svi::yatesvi::svientrant::astroconsult::selectexpert::bycat::no_availability')"/>
            </prompt>
            <goto next="wdeal:///astroconsult/select_expert.xml"/>
          </block>
        </form>
    </vxml>
    '''

@defer.inlineCallbacks
def load_content(params, vxml_session = None):
    doc_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    doc_content += '<vxml>\n'
    doc_content += '<import module="wdeal" system="true"/>\n'
    doc_content += '<var name="service_list"/>\n'
    dbtool_obj = ConfigManager.get_value("runtime", "svientrant.dbtool")
    
    lang = None
    if vxml_session:
        lang = vxml_session.call.get_custom_attr("lang")
    
    ret = yield dbtool_obj.get_service_liste_by_category(params["buyer_alias"], lang)
    if ret["status_code"] != "0":
        defer.returnValue(get_general_error_content())
        return
    service_list = ret["data"]
    service_count = 0
    if service_list:
        service_count = len(service_list)
    if not service_count:
        defer.returnValue(get_no_available_expert_content())
        return
    
    doc_content +=  '<form id="main_form"> \n'
    doc_content +=  ' <block> \n'
    doc_content +=  '   <prompt> \n'
    doc_content += '''    <audio expr="wdeal.fedora('svi::yatesvi::svientrant::astroconsult::selectexpert::bycat::select_instructions')"/>'''
    doc_content +=  '   </prompt> \n'
    doc_content +=  ' </block> \n'
    for i in range(service_count):
        doc_content += ' <field name="service_%s">\n' % (i,)
        doc_content += '   <prompt timeout="5">\n'
#        doc_content += '''    <audio expr="wdeal.fedora('svi::yatesvi::svientrant::astroconsult::selectexpert::bycat::select_instructions')"/>'''
        doc_content += '''    <audio expr="wdeal.welcome_file('%s', %s)"/>''' % (service_list[i]['role_seller_alias_prefix'], service_list[i]['role_seller_tph_wp_account_keyid'])
        doc_content += '''    <audio expr="wdeal.fedora('svi::yatesvi::svientrant::astroconsult::selectexpert::bycat::select_instructions_1')"/>'''
        doc_content += '   </prompt>\n'
        doc_content +=  '  <grammar type="application/regex" expr="[12\*]" max_length="1"/> \n'
        doc_content +=  '  <filled> \n'
        doc_content +=  '     <if cond="service_%s == 1"> \n' % (i,)
        doc_content +=  '        <script><![CDATA[ \n'
        doc_content += '           _log_debug("sevice at index %s is chosen"); \n' % (i,)
        doc_content += '           wdeal.set_attr("service_chosen", service_list[%s]); \n' % (i,)
        doc_content += '         ]]></script>\n'
        doc_content += '         <goto next="wdeal:///astroconsult/validate_credit_before_call.xml"/> \n'
        doc_content += '''     <elseif cond="service_%s == '*'"/> \n''' % (i,)
        doc_content += '         <goto next="wdeal:///astroconsult/select_expert.xml"/> \n'
        doc_content +=  '     </if> \n'
        doc_content +=  '  </filled> \n'
        doc_content +=  '  <noinput> \n'
        doc_content +=  '     <script> \n'
        doc_content +=  '        service_%s = 2;\n' % (i,)
        doc_content +=  '     </script> \n'
        doc_content +=  '     <reprompt/> \n'
        doc_content +=  '  </noinput> \n'
        doc_content += ' </field>\n'
    doc_content += ' <field name="end_of_list_choice">\n'
    doc_content += '   <prompt>\n'
    doc_content += '''    <audio expr="wdeal.fedora('svi::yatesvi::svientrant::astroconsult::selectexpert::bycat::end_of_list')"/>'''
    doc_content += '   </prompt>\n'
    doc_content +=  '  <grammar type="application/regex" expr="[0\*]" max_length="1"/> \n'
    doc_content +=  '  <filled> \n'
    doc_content +=  '     <if cond="end_of_list_choice == 0"> \n'
    doc_content += '         <goto next="wdeal:///astroconsult/goto_teller.xml?calling_reason=astroconsult.launch_call"/> \n'
    doc_content += '''     <elseif cond="end_of_list_choice == '*'"/> \n'''
    doc_content += '         <clear namelist="end_of_list_choice %s"/> \n' % ' '.join(['service_%s' % i for i in range(service_count)])
    doc_content +=  '     </if> \n'
    doc_content +=  '  </filled> \n'
    doc_content += ' </field>\n'
    doc_content += '</form>'
    doc_content += '</vxml>'

    defer.returnValue(ContentLoadResult(doc_content, {"service_list":service_list}))
