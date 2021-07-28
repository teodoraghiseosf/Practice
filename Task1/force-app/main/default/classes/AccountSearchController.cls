/**
 * File:        AccountSearchController.cls
 * Project:     XXX
 * Date:        July 28, 2021
 * Created By:  Teodora Ghise
 * ***************************************************************
 * Description: Account Search Controller class
 * ***************************************************************
 * History:
 * Date:                Modified By:             Description:
 */

public class AccountSearchController {
    @AuraEnabled
    public static List <Account> getAccounts() {
        return [SELECT Id, Name, Email__c FROM Account where Email__c !=null ORDER BY createdDate ASC];
    }
    @AuraEnabled
    public static List<Account> findByEmail(String searchKey) {
        String email =  + searchKey + '%';
        List<Account> result = new List<Account>();
        for (Account account : [SELECT id,Name, Email__c FROM Account WHERE Email__c LIKE :email]){
            result.add(account);
        }
        return result;
    }
}