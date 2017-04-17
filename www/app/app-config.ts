/*
  Generated class for the ShopConstant provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class AppConfig {
  Shop_Signature_Method = 'HMAC-SHA1';//no need change
  Shop_Nonce_Length = 32;//no need change
  Shop_Parameter_Seperator = ', ';//no need change
  Shop_Language='ru';//If change this,create a new file named your language(eg.chinese:zh.json) in assets/i18n then copy all from en.json and translate it. 

  Shop_Name = "";//no need set,will get from your website
  Shop_Version = "1.0";
  Shop_URL = "http://moykkbd.ru";//set your website url,eg:"http://www.yousite.com"
  Shop_ConsumerKey = "ck_d6421eda0037c3409ed3ed1f784a5ac31b4d2d5b";//woocommerce rest api ConsumerKey
  Shop_ConsumerSecret = "cs_eedab00eda7638f33988a63e5f1ee359a4c4f94d";//woocommerce rest api ConsumerSecret
  Shop_Currency = "";//no need setting,will get from your Website
  Shop_Currency_format = "руб.";//no need setting,will get from your Website

  //your shipping method,you need set these method with our plugin
  Shop_Shipping = [];

  App_Secret = "dd05d8b8cd87adda602a8da7faacffa7e0ee2406eebc63b56186b2e2b9084f2d";//install our plugin then Generate Secret key in basic setting 
  Show_Home_Slide = true;//whether show home slide

  //Paypal setting
  //PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  //if you want to test payment,set Environments to PayPalEnvironmentSandbox,otherwise set to PayPalEnvironmentProduction
  Paypal_Environments = "PayPalEnvironmentProduction";
  PayPal_EnvironmentProduction = "";
  PayPal_EnvironmentSandbox = "";

  //Stripe payment setting
  Enable_Stripe = false;//Enable or disable stripe
  Stripe_Live_Secret_Key = "";//Live mode Secret Key
  Stripe_Live_Publishable_Key = "";//Live mode Publishable Key

  Enable_Stripe_Test_Mode = false;//Enable or disable test mode
  Stripe_Test_Secret_Key = "sk_test_XmlMB5nJOvJ9qEvlu8oc9M38";//Test mode Secret Key
  Stripe_Test_Publishable_Key = "pk_test_lzIx95R32MjHKiIjc7y9rshM";//Test mode Publishable Key

  //Onesignal setting
  //Please check our online document set these
  Onesignal_Enable = false;//enable/disable Onesignal
  OneSignal_AppID = "";
  GCM_SenderID = "";

  //enable login with password,need to add codes to woocommerce,please check readme file
  Eanble_Login_With_Password = true;

  //Contact page info
  Service_In_Weekdays = "ПН-ПТ с 10:00 до 18:00";
  Service_Weekend = "СБ,ВС - выходные";
  Service_Tel = "+7 (495) 150-46-49";

  //Faq page info
  //Title:question Title
  //content:the answser
  Question_Array = [
    {
      'Title': 'Вопрос?',
      Content: `Ответ.` },
    {
      'Title': 'Вопрос?',
      Content: `Ответ.` },
    {
      'Title': 'Вопрос?',
      Content: `Ответ.` },
  ];

  //About page info
  Introduction = `Создано Tec-doc.ru`;
  Address1 = "МО, г. Долгопрудный";
  Address2 = "Лихачевский проезд, д.19";
  CopyRight = "TEC-DOC.RU";

  //logo in app not app icon
  Logo_Image = "assets/img/logo.png";//copy your own image to assets/img/yourlogo.png and set logo.png to yourlogo.png. 

  constructor() {
  }
}
