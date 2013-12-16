var branches = {
        "HKHLD": {
                        "code":"holdings",
                        "value": "0",
                        "lat":"22.279184",
                        "long":"114.169375"
        },
        "HKCWM": {
                        "code":"cwm",
                        "value": "1",
                        "lat":"22.278564",
                        "long":"114.169969"
        },
        "HKSHA": {
                        "code":"shatin",
                        "value": "2",
                        "lat":"22.382388",
                        "long":"114.207824"
        }
                                                                                };
 
(function () {
                //var overrideCtx = {};
                //overrideCtx.Templates = {};
 
                var headerString = "<div id='filters'>";
                var position = 0;
                for (var key in businessUnits) {
                                headerString += "<div id='filter-" + businessUnits[key].code + "' class='filter-button " + businessUnits[key].code + "' buCode='" + businessUnits[key].value + "'>" + key + "</div>";
                                if (position != 3 && position != 7) {
                                                headerString += "<div class='gap'></div>";
                                }
                                position++;
                }
                headerString += "</div><div id='library-container'></div>";
               
                //overrideCtx.Templates.Header = headerString;
                //overrideCtx.Templates.Item = CustomItem;
                SPClientTemplates.TemplateManager.RegisterTemplateOverrides(overrideCtx);
})();
 
 
/*
* This function builds the output for the item template.
* Uses the Context object to access announcement data.
*/
function CustomItem(ctx) {
                if (ctx.CurrentItem.RelatedBusinessUnits.length > 0) {
                                for (var i=0; i<ctx.CurrentItem.RelatedBusinessUnits.length; i++) {
                                                ctx.CurrentItem.RelatedBusinessUnits[i] = businessUnits[ctx.CurrentItem.RelatedBusinessUnits[i]].value;
                                }
                }
               
    // Build a listitem entry for every announcement in the list.
    var ret =           "<a class='library-page-item' \
                                                                href='/Marketing/Lists/MarketingLibrary/DispForm.aspx?ID=" + ctx.CurrentItem.ID + "' \
                                                                categories='" + ctx.CurrentItem.MarketingLibraryCategory + "' \
                                                                buss='" + ctx.CurrentItem.RelatedBusinessUnits + "'>" +
                                                                                ctx.CurrentItem.Title +
                                                "</a>";
 
                return ret;
}