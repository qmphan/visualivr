var month_sound = [
    "svi::yatesvi::common::month::january",
    "svi::yatesvi::common::month::february",
    "svi::yatesvi::common::month::march",
    "svi::yatesvi::common::month::april",
    "svi::yatesvi::common::month::may",
    "svi::yatesvi::common::month::june",
    "svi::yatesvi::common::month::july",
    "svi::yatesvi::common::month::august",
    "svi::yatesvi::common::month::september",
    "svi::yatesvi::common::month::october",
    "svi::yatesvi::common::month::november",
    "svi::yatesvi::common::month::december"
];

function check_birthdate(sday, smonth, syear)
{
    var day = parseInt(sday, 10);
    var month = parseInt(smonth, 10);
    var year = parseInt(syear, 10);

    var d = new Date(year, month, day);

    _log_debug("birthdate2 : %s %s %s", d.getDate(), d.getMonth(), d.getFullYear());

    if (d.getFullYear() == year 
        && d.getMonth() == month
        && d.getDate() == day)    
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

function get_month_sound(smonth)
{
    var month = parseInt(smonth, 10);

    return month_sound[month - 1];
}

function get_gender_sound(gender)
{
    if (gender == 1)
    {
        return 'svi::yatesvi::svientrant::astroconsult::astrotv::a_woman';
    }
    else
    {
        return 'svi::yatesvi::svientrant::astroconsult::astrotv::a_man';
    }
}

function get_welcome_sound(broadcast_status, brand)
{
    if (broadcast_status == 1)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::welcome';
    }
    else if (broadcast_status == 2)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::welcome_nearly_started';
    }
    else if (broadcast_status == 3)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::welcome_rerun';
    }
    else if (broadcast_status == 4)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::welcome_almost_finished';
    }
    else
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::welcome_finished';
    }
}

function get_menu_sound(broadcast_status, brand)
{
    if (broadcast_status == 1)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::menu';
    }
    else if (broadcast_status == 2)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::menu_nearly_started';
    }
    else if (broadcast_status == 3)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::menu_rerun';
    }
    else if (broadcast_status == 4)
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::menu_almost_finished';
    }
    else
    {
        return 'svi::yatesvi::svientrant::astroconsult::' + brand + '::menu_finished';
    }
}


