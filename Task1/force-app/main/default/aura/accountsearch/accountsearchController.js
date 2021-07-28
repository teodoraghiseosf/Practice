/**
 * File:        accountsearchController.js
 * Project:     XXX
 * Date:        July 28, 2021
 * Created By:  Teodora Ghise
 * **********************************************************
 * Description: Account Search Controller js
 * **********************************************************
 * History:
 * Date:                Modified By:             Description:
 */


({
    doInit: function(component, event, helper) {
        helper.getAccountList(component);
    },
    searchKeyChange: function(component, event) {
        var searchKey = component.find("searchKey").get("v.value");
        var action = component.get("c.findByEmail");
        action.setParams({
            "searchKey": searchKey
        });
        action.setCallback(this, function(a) {
            component.set("v.accounts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    
    downlandCSV: function(component, event, helper){
        var stockData = component.get("v.accounts");
        var csv = helper.convertToCSV(component,stockData);
        if(csv == null){
            return;
        }
          var hiddenElement = document.createElement('a');
          hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
          hiddenElement.download = 'ExportAccount.csv'; 
          document.body.appendChild(hiddenElement); 
    	  hiddenElement.click(); 
        }, 
    
})