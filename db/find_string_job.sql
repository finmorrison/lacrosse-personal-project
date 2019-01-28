select itemprice, min(itemid) as itemid from lax_site_items
where itemprice = ${itemprice} and itemname = 'stringing options' and pocketplace = ${pocketPlacement} and meshtype = ${meshType} and meshcolor = ${meshColor} and sidewallcolor = ${sidewallColor} and shootingstringcolor = ${shootingStrings} and specialtystyle = ${specialtyStyle} and headtype = 'N/A' and whip = ${whip} and images = 'N/A'

group by itemprice