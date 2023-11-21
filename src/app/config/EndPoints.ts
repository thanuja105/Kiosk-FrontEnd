import { type } from "os";
import { User } from "./Model";

export class EndPoints {


  //  public static readonly BASE_URL: string = "http://Smartersafeiicorpjavaspringbootmicro-env.eba-hx3uz3y2.us-east-1.elasticbeanstalk.com";

    public static readonly BASE_URL: string = "http://localhost:9002";

    public static DO_LOGIN(): string {
        return this.BASE_URL + "/userInfo/loginKiosk";
    }
    public static ADD_ChangeDrequest():string{
        return this.BASE_URL + "/change-request/changeRequest";
    }
    public static SAVE_TRUCKChangeDrequest():string{
        return this.BASE_URL + "/truck-change-request/addtruckchangerequest";
    }
    public static GET_CHANGE_REQUEST_STATUS(orderStatus:string):string{
        return this.BASE_URL + "/change-request/changeRequest/MAINSAFE/"+orderStatus;
    }
    public static ADD_USER(): string {
        return this.BASE_URL + "/userInfo/";
    }
    public static ADD_ChangeRequest(): string {
        return this.BASE_URL + "/standbank/denominations";
    }
    public static ADD_ChangeDenominies():string{
        return this.BASE_URL + "/changeRequest/denominations";
    }
    public static CANCEL_ChangeDenominies():string {
        return this.BASE_URL+"/truck-change-request/cancel-truck-change-request";
    }
    public static GET_ALLDENOMINATIONS(){
        return this.BASE_URL + "/standbank/denominations/all"
    }
    public static GET_CHANGEREQUESTALLSTATUS(){
        return this.BASE_URL+"/change-request/changeRequest";
    }
    public static GET_STANDBANK_DETAILS(type:string): string{
        return this.BASE_URL + "/standbank/denominations/"+type
    }
    public static LIST_USERS(): string {
        return this.BASE_URL + "/userInfo/all";
    }

    public static FIND_USER_BY_ROLE(role: string): string {
        return this.BASE_URL + "/userInfo/role/" + role;
    }


    public static DELETE_USER_BY_ROLE(userId: number): string {
        return this.BASE_URL + "/userInfo/" + userId;
    }


    static INCOMPLETE_INSERT_BILLS(): string {
        return this.BASE_URL + "/insertbill/incomplete";
    }

    static PROCESS_INSERT_BILLS(userId: number): string {
        return this.BASE_URL + "/insertbill/processBills/" + userId;
    }

    static MANAGER_BILL_REPORT(): string {
        return this.BASE_URL + "/reports/managerReport/";
    }
    static PRINT_MANAGER_REPORT(userId:string):string{
        return this.BASE_URL+"/reports/managerReport/"+userId;
    }
    
    static PRINT_STANDBANK_REPORT(type:string,userId:string):string{
        return this.BASE_URL+"/reports/managerReportforStandBank/"+type+"/"+userId;
    }
    static PRINT_STANDBANKInter_REPORT(userId:string):string{
        return this.BASE_URL+"/reports/managerReportforStandBankInter/"+userId;
    }
    static PRINT_CHANGEREQUEST_REPORT(OrderStatus:string,userId:string):string{
        return this.BASE_URL+"/reports/managerReportforChangeRequest/"+OrderStatus+"/"+userId;
    }

    static INSERTBIILS_REPORT(transactionNumber:string):string{
        return  this.BASE_URL+"/reports/insertBillsReport/"+transactionNumber;
    }

    static INSERTBIILS_REPORTT(transactionNumber:string,storeName:string):string{
        return  this.BASE_URL+"/reports/insertBillsReport/"+transactionNumber+"/"+storeName;
    }

    static PRINT_TEST_REPORT(storeName:string):string{
        return this.BASE_URL+"/reports/testPrintReport/"+storeName;
    }
    static RE_PRINT_RECEIPT(storeName:string):string{
        return this.BASE_URL+"/reports/rePrintReceipt/"+storeName;
    }
    static END_OF_THE_DAY_REPORT(userId:number){
        return this.BASE_URL+"/reports/endofdayReport/"+userId;
    }
    static PRINT_EMPLOYEE_REPORT(userId:string):string{
        return this.BASE_URL+"/reports/employeeReport/"+userId;
    }
    static GETCHANGEREQUESTREPORT(path:string):string{
        return this.BASE_URL+"/reports/changeRequestReportExport/"+path
    }
    static GETSTANDBANKREPORT(path:string):string{
        return this.BASE_URL+"/reports/standBankReportExport/"+path
    }
    static GET_USER_BY_ROLES(){
        return this.BASE_URL+"/userInfo/users/roles";
    }
    static GET_USER_BY_ROLESStore(storeName:string,roles:string){
        return this.BASE_URL+"/userInfo/store/"+storeName+"/"+roles;
    }

    static GET_USER_BY_ROLESs(storeName:string){
        return this.BASE_URL+"/userInfo/users/roles/"+storeName;
    }

    static GET_STORE_BY_STORENAME(storeName:string){
        return this.BASE_URL+"/storeinfo/" +storeName;
    }

    static LIST_STORES(){
        return this.BASE_URL+"/storeinfo/all" ;
    }

    static CONFIGURE_STORE(){
        return this.BASE_URL+"/storeinfo/configure" ;
    }
    
    static PROMOTE_USER(userId:number){
        return this.BASE_URL+"/userInfo/promoteUser/"+userId ;
    }

    static OPEN_LOCK(id:string){
        return this.BASE_URL+"/lock/open/"+id;
    }

    public static GET_KIOSK_MAC(){
        return this.BASE_URL+"/kiosk/macInfo";
    }

    static BASED_ON_DAYS(days:number){
        return this.BASE_URL+"/userInfo/basedOnDays/"+days;
    }

    public static ASSIGN_STORE_KIOSK(storeId:number,kioskId:number){
        return this.BASE_URL+"/kiosk/assign/store/"+storeId+"/kiosk/"+kioskId;
    }

    public static find_storedetail(storeName:string){
        return this.BASE_URL+"/storeinfo/"+storeName;
    }

    public static Lock_Info(userId:number,type:string){
        return this.BASE_URL+"/locksInfo/"+userId+"/"+type;
    }

    public static User_to_Lock_Info(userId:number){
        return this.BASE_URL+"/userInfo/usertokiosk/"+userId;
    }

    public static fetching_remote_local(){
        return this.BASE_URL+"/datebase/remotesync";
    }

    public static fetching_withdraw_report(storeName:string){
        return this.BASE_URL+"/reports/pickupamount/"+storeName;
    }

    public static fetching_update_withdraw_report(storeName:string){
        return this.BASE_URL+"/reports/updatewithdrawsatus/"+storeName;
    }

}