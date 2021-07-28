/**
 * File:        accountsearchHelper.js
 * Project:     XXX
 * Date:        July 28, 2021
 * Created By:  Teodora Ghise
 * **********************************************************
 * Description: Account Search Helper js
 * **********************************************************
 * History:
 * Date:                Modified By:             Description:
 */

({      
    getAccountList: function(component) {
        var action = component.get('c.getAccounts');
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.accounts', actionResult.getReturnValue());
        });
        $A.enqueueAction(action);
    },
    convertToCSV : function(component,objectRecords){
        var csvStringResult, counter, keys, columnDivider, lineDivider;
        
        columnDivider = ',';
        lineDivider =  '\n'; 
        keys = ['Name','Email__c'];
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
        
        for(var i=0; i < objectRecords.length; i++){   
            counter = 0;
            for(var sTempkey in keys) {
                var skey = keys[sTempkey] ;  
                if(counter > 0){ 
                    csvStringResult += columnDivider; 
                }   
                csvStringResult +=  objectRecords[i][skey]; 
                counter++;   
            }
            csvStringResult += lineDivider;
        }
        return csvStringResult;        
    },
})