const data = [
    {country:  "AF", value: "اینجا چه اتفاقی افتاد"},
    {country:  "AX", value: "vad hände här"},
    {country:  "AL", value: "çfare ndodhi ketu"},
    {country:  "DZ", value: "ماذا حدث هنا؟"},
    
    {country:  "AS", value: "American Samoa"},
    {country:  "AD", value: "Andorra"},
    {country:  "AO", value: "Angola"},
    {country:  "AI", value: "Anguilla"},
    {country:  "AQ", value: "Antarctica"},
    {country:  "AG", value: "Antigua And Barbuda"},
    {country:  "AR", value: "Argentina"},
    {country:  "AM", value: "Armenia"},
    {country:  "AW", value: "Aruba"},
    {country:  "AU", value: "Australia"},
    {country:  "AT", value: "Austria"},
    {country:  "AZ", value: "Azerbaijan"},
    {country:  "BS", value: "Bahamas"},
    {country:  "BH", value: "Bahrain"},
    {country:  "BD", value: "Bangladesh"},
    {country:  "BB", value: "Barbados"},
    {country:  "BY", value: "Belarus"},
    {country:  "BE", value: "Belgium"},
    {country:  "BZ", value: "Belize"},
    {country:  "BJ", value: "Benin"},
    {country:  "BM", value: "Bermuda"},
    {country:  "BT", value: "Bhutan"},
    {country:  "BO", value: "Bolivia"},
    {country:  "BA", value: "Bosnia And Herzegovina"},
    {country:  "BW", value: "Botswana"},
    {country:  "BV", value: "Bouvet Island"},
    {country:  "BR", value: "Brazil"},
    {country:  "IO", value: "British Indian Ocean Territory"},
    {country:  "BN", value: "Brunei Darussalam"},
    {country:  "BG", value: "Bulgaria"},
    {country:  "BF", value: "Burkina Faso"},
    {country:  "BI", value: "Burundi"},
    {country:  "KH", value: "Cambodia"},
    {country:  "CM", value: "Cameroon"},
    {country:  "CA", value: "Canada"},
    {country:  "CV", value: "Cape Verde"},
    {country:  "KY", value: "Cayman Islands"},
    {country:  "CF", value: "Central African Republic"},
    {country:  "TD", value: "Chad"},
    {country:  "CL", value: "Chile"},
    {country:  "CN", value: "China"},
    {country:  "CX", value: "Christmas Island"},
    {country:  "CC", value: "Cocos (Keeling) Islands"},
    {country:  "CO", value: "Colombia"},
    {country:  "KM", value: "Comoros"},
    {country:  "CG", value: "Congo"},
    {country:  "CD", value: "Congo, Democratic Republic"},
    {country:  "CK", value: "Cook Islands"},
    {country:  "CR", value: "Costa Rica"},
    {country:  "CI", value: "Cote D\"Ivoire"},
    {country:  "HR", value: "Croatia"},
    {country:  "CU", value: "Cuba"},
    {country:  "CY", value: "Cyprus"},
    {country:  "CZ", value: "Czech Republic"},
    {country:  "DK", value: "Denmark"},
    {country:  "DJ", value: "Djibouti"},
    {country:  "DM", value: "Dominica"},
    {country:  "DO", value: "Dominican Republic"},
    {country:  "EC", value: "Ecuador"},
    {country:  "EG", value: "Egypt"},
    {country:  "SV", value: "El Salvador"},
    {country:  "GQ", value: "Equatorial Guinea"},
    {country:  "ER", value: "Eritrea"},
    {country:  "EE", value: "Estonia"},
    {country:  "ET", value: "Ethiopia"},
    {country:  "FK", value: "Falkland Islands (Malvinas)"},
    {country:  "FO", value: "Faroe Islands"},
    {country:  "FJ", value: "Fiji"},
    {country:  "FI", value: "Finland"},
    {country:  "FR", value: "France"},
    {country:  "GF", value: "French Guiana"},
    {country:  "PF", value: "French Polynesia"},
    {country:  "TF", value: "French Southern Territories"},
    {country:  "GA", value: "Gabon"},
    {country:  "GM", value: "Gambia"},
    {country:  "GE", value: "Georgia"},
    {country:  "DE", value: "Germany"},
    {country:  "GH", value: "Ghana"},
    {country:  "GI", value: "Gibraltar"},
    {country:  "GR", value: "Greece"},
    {country:  "GL", value: "Greenland"},
    {country:  "GD", value: "Grenada"},
    {country:  "GP", value: "Guadeloupe"},
    {country:  "GU", value: "Guam"},
    {country:  "GT", value: "Guatemala"},
    {country:  "GG", value: "Guernsey"},
    {country:  "GN", value: "Guinea"},
    {country:  "GW", value: "Guinea-Bissau"},
    {country:  "GY", value: "Guyana"},
    {country:  "HT", value: "Haiti"},
    {country:  "HM", value: "Heard Island & Mcdonald Islands"},
    {country:  "VA", value: "Holy See (Vatican City State)"},
    {country:  "HN", value: "Honduras"},
    {country:  "HK", value: "Hong Kong"},
    {country:  "HU", value: "Hungary"},
    {country:  "IS", value: "Iceland"},
    {country:  "IN", value: "India"},
    {country:  "ID", value: "Indonesia"},
    {country:  "IR", value: "Iran, Islamic Republic Of"},
    {country:  "IQ", value: "Iraq"},
    {country:  "IE", value: "Ireland"},
    {country:  "IM", value: "Isle Of Man"},
    {country:  "IL", value: "Israel"},
    {country:  "IT", value: "Italy"},
    {country:  "JM", value: "Jamaica"},
    {country:  "JP", value: "Japan"},
    {country:  "JE", value: "Jersey"},
    {country:  "JO", value: "Jordan"},
    {country:  "KZ", value: "Kazakhstan"},
    {country:  "KE", value: "Kenya"},
    {country:  "KI", value: "Kiribati"},
    {country:  "KR", value: "Korea"},
    {country:  "KP", value: "North Korea"},
    {country:  "KW", value: "Kuwait"},
    {country:  "KG", value: "Kyrgyzstan"},
    {country:  "LA", value: "Lao People\"s Democratic Republic"},
    {country:  "LV", value: "Latvia"},
    {country:  "LB", value: "Lebanon"},
    {country:  "LS", value: "Lesotho"},
    {country:  "LR", value: "Liberia"},
    {country:  "LY", value: "Libyan Arab Jamahiriya"},
    {country:  "LI", value: "Liechtenstein"},
    {country:  "LT", value: "Lithuania"},
    {country:  "LU", value: "Luxembourg"},
    {country:  "MO", value: "Macao"},
    {country:  "MK", value: "Macedonia"},
    {country:  "MG", value: "Madagascar"},
    {country:  "MW", value: "Malawi"},
    {country:  "MY", value: "Malaysia"},
    {country:  "MV", value: "Maldives"},
    {country:  "ML", value: "Mali"},
    {country:  "MT", value: "Malta"},
    {country:  "MH", value: "Marshall Islands"},
    {country:  "MQ", value: "Martinique"},
    {country:  "MR", value: "Mauritania"},
    {country:  "MU", value: "Mauritius"},
    {country:  "YT", value: "Mayotte"},
    {country:  "MX", value: "Mexico"},
    {country:  "FM", value: "Micronesia, Federated States Of"},
    {country:  "MD", value: "Moldova"},
    {country:  "MC", value: "Monaco"},
    {country:  "MN", value: "Mongolia"},
    {country:  "ME", value: "Montenegro"},
    {country:  "MS", value: "Montserrat"},
    {country:  "MA", value: "Morocco"},
    {country:  "MZ", value: "Mozambique"},
    {country:  "MM", value: "Myanmar"},
    {country:  "NA", value: "Namibia"},
    {country:  "NR", value: "Nauru"},
    {country:  "NP", value: "Nepal"},
    {country:  "NL", value: "Netherlands"},
    {country:  "AN", value: "Netherlands Antilles"},
    {country:  "NC", value: "New Caledonia"},
    {country:  "NZ", value: "New Zealand"},
    {country:  "NI", value: "Nicaragua"},
    {country:  "NE", value: "Niger"},
    {country:  "NG", value: "Nigeria"},
    {country:  "NU", value: "Niue"},
    {country:  "NF", value: "Norfolk Island"},
    {country:  "MP", value: "Northern Mariana Islands"},
    {country:  "NO", value: "Norway"},
    {country:  "OM", value: "Oman"},
    {country:  "PK", value: "Pakistan"},
    {country:  "PW", value: "Palau"},
    {country:  "PS", value: "Palestinian Territory, Occupied"},
    {country:  "PA", value: "Panama"},
    {country:  "PG", value: "Papua New Guinea"},
    {country:  "PY", value: "Paraguay"},
    {country:  "PE", value: "Peru"},
    {country:  "PH", value: "Philippines"},
    {country:  "PN", value: "Pitcairn"},
    {country:  "PL", value: "Poland"},
    {country:  "PT", value: "Portugal"},
    {country:  "PR", value: "Puerto Rico"},
    {country:  "QA", value: "Qatar"},
    {country:  "RE", value: "Reunion"},
    {country:  "RO", value: "Romania"},
    {country:  "RU", value: "Russian Federation"},
    {country:  "RW", value: "Rwanda"},
    {country:  "BL", value: "Saint Barthelemy"},
    {country:  "SH", value: "Saint Helena"},
    {country:  "KN", value: "Saint Kitts And Nevis"},
    {country:  "LC", value: "Saint Lucia"},
    {country:  "MF", value: "Saint Martin"},
    {country:  "PM", value: "Saint Pierre And Miquelon"},
    {country:  "VC", value: "Saint Vincent And Grenadines"},
    {country:  "WS", value: "Samoa"},
    {country:  "SM", value: "San Marino"},
    {country:  "ST", value: "Sao Tome And Principe"},
    {country:  "SA", value: "Saudi Arabia"},
    {country:  "SN", value: "Senegal"},
    {country:  "RS", value: "Serbia"},
    {country:  "SC", value: "Seychelles"},
    {country:  "SL", value: "Sierra Leone"},
    {country:  "SG", value: "Singapore"},
    {country:  "SK", value: "Slovakia"},
    {country:  "SI", value: "Slovenia"},
    {country:  "SB", value: "Solomon Islands"},
    {country:  "SO", value: "Somalia"},
    {country:  "ZA", value: "South Africa"},
    {country:  "GS", value: "South Georgia And Sandwich Isl."},
    {country:  "ES", value: "Spain"},
    {country:  "LK", value: "Sri Lanka"},
    {country:  "SD", value: "Sudan"},
    {country:  "SR", value: "Suriname"},
    {country:  "SJ", value: "Svalbard And Jan Mayen"},
    {country:  "SZ", value: "Swaziland"},
    {country:  "SE", value: "Sweden"},
    {country:  "CH", value: "Switzerland"},
    {country:  "SY", value: "Syrian Arab Republic"},
    {country:  "TW", value: "Taiwan"},
    {country:  "TJ", value: "Tajikistan"},
    {country:  "TZ", value: "Tanzania"},
    {country:  "TH", value: "Thailand"},
    {country:  "TL", value: "Timor-Leste"},
    {country:  "TG", value: "Togo"},
    {country:  "TK", value: "Tokelau"},
    {country:  "TO", value: "Tonga"},
    {country:  "TT", value: "Trinidad And Tobago"},
    {country:  "TN", value: "Tunisia"},
    {country:  "TR", value: "Turkey"},
    {country:  "TM", value: "Turkmenistan"},
    {country:  "TC", value: "Turks And Caicos Islands"},
    {country:  "TV", value: "Tuvalu"},
    {country:  "UG", value: "Uganda"},
    {country:  "UA", value: "Ukraine"},
    {country:  "AE", value: "United Arab Emirates"},
    {country:  "GB", value: "United Kingdom"},
    {country:  "US", value: "United States"},
    {country:  "UM", value: "United States Outlying Islands"},
    {country:  "UY", value: "Uruguay"},
    {country:  "UZ", value: "Uzbekistan"},
    {country:  "VU", value: "Vanuatu"},
    {country:  "VE", value: "Venezuela"},
    {country:  "VN", value: "Vietnam"},
    {country:  "VG", value: "Virgin Islands, British"},
    {country:  "VI", value: "Virgin Islands, U.S."},
    {country:  "WF", value: "Wallis And Futuna"},
    {country:  "EH", value: "Western Sahara"},
    {country:  "YE", value: "Yemen"},
    {country:  "ZM", value: "Zambia"},
    {country:  "ZW", value: "Zimbabwe"}
];
export default data;