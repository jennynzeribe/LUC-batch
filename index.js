let progressbar = document.querySelector('#progressbar');
let progress = document.querySelector('#progress');

let seconds = 50100/60;

let timer;

 let year = 100;
 let width = 5;
 let counter =60;

timer = setInterval(() => {

    
    width+=1.6;
    year += seconds;
    progress.innerHTML = year;
    progressbar.style.width=width+"%";   
    counter+=6;
    console.log(counter)
    if(counter == 420){
        clearInterval(timer);
        console.log("Here oooo");
    } 
}, seconds);
// var name = "Jenifer";

// const functiovarai = function(){
//     this.name ="Lolade";
//     this.age =22;
//     console.log(this)
// }

// const isFullname = ()=>{
//     this.name ="Lolade";
//     this.age =22;
//     console.log(this);
// }

// functiovarai();

// isFullname();

// functiovarai =function(){
//     console.log("Just testing");
// }

// functiovarai();
 var button = document.getElementById('load').addEventListener('click', function(){
     console.log(123);
 });

    

 var data = [
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949543_1358315.pdf",
        "folderrsn": "949543",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358315",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949546_1358321.pdf",
        "folderrsn": "949546",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358321",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949549_1358327.pdf",
        "folderrsn": "949549",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358327",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949550_1358329.pdf",
        "folderrsn": "949550",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358329",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949553_1358335.pdf",
        "folderrsn": "949553",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358335",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949556_1358341.pdf",
        "folderrsn": "949556",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358341",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949557_1358343.pdf",
        "folderrsn": "949557",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358343",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949580_1358349.pdf",
        "folderrsn": "949580",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358349",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949583_1358355.pdf",
        "folderrsn": "949583",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358355",
        "ownerName": "Baba semusemu",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949584_1358357.pdf",
        "folderrsn": "949584",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358357",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949588_1358365.pdf",
        "folderrsn": "949588",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358365",
        "ownerName": "Mr Oga Awo",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949589_1358367.pdf",
        "folderrsn": "949589",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358367",
        "ownerName": "Mrs Medinat",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949592_1358373.pdf",
        "folderrsn": "949592",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358373",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949648_1358379.pdf",
        "folderrsn": "949648",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358379",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949649_1358381.pdf",
        "folderrsn": "949649",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358381",
        "ownerName": "Mr Omoolowo",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949653_1358389.pdf",
        "folderrsn": "949653",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358389",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949654_1358391.pdf",
        "folderrsn": "949654",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358391",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949657_1358397.pdf",
        "folderrsn": "949657",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358397",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949660_1358403.pdf",
        "folderrsn": "949660",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358403",
        "ownerName": "Pa Babafemi",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949661_1358405.pdf",
        "folderrsn": "949661",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358405",
        "ownerName": "prince Babarinde",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_888025_1358413.pdf",
        "folderrsn": "888025",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358413",
        "ownerName": "PROPERTY OWNER",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_873510_1358415.pdf",
        "folderrsn": "873510",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358415",
        "ownerName": "GLADYS KITCHEN",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949559_1358421.pdf",
        "folderrsn": "949559",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358421",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949563_1358427.pdf",
        "folderrsn": "949563",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358427",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949564_1358429.pdf",
        "folderrsn": "949564",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358429",
        "ownerName": "Prince Imoru",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949568_1358437.pdf",
        "folderrsn": "949568",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358437",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949572_1358445.pdf",
        "folderrsn": "949572",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358445",
        "ownerName": "Olorunda O",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949595_1358451.pdf",
        "folderrsn": "949595",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358451",
        "ownerName": "Mr Agoye",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949596_1358453.pdf",
        "folderrsn": "949596",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358453",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949600_1358461.pdf",
        "folderrsn": "949600",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358461",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949601_1358463.pdf",
        "folderrsn": "949601",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358463",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949605_1358469.pdf",
        "folderrsn": "949605",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358469",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949608_1358475.pdf",
        "folderrsn": "949608",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358475",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949609_1358477.pdf",
        "folderrsn": "949609",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358477",
        "ownerName": "K. A Idris",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_949613_1358485.pdf",
        "folderrsn": "949613",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358485",
        "ownerName": "Reverend Bamisaye",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950870_1358487.pdf",
        "folderrsn": "950870",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358487",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882585_1354147.pdf",
        "folderrsn": "882585",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354147",
        "ownerName": "Property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882588_1354153.pdf",
        "folderrsn": "882588",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354153",
        "ownerName": "Chief ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882589_1354155.pdf",
        "folderrsn": "882589",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354155",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882594_1354165.pdf",
        "folderrsn": "882594",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354165",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882854_1354171.pdf",
        "folderrsn": "882854",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354171",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882858_1354179.pdf",
        "folderrsn": "882858",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354179",
        "ownerName": "Chief R. O Falaye ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882859_1354181.pdf",
        "folderrsn": "882859",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354181",
        "ownerName": "Olanireti Fayashe",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882863_1354189.pdf",
        "folderrsn": "882863",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354189",
        "ownerName": "Property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_882867_1354197.pdf",
        "folderrsn": "882867",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354197",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883147_1354215.pdf",
        "folderrsn": "883147",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354215",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883148_1354217.pdf",
        "folderrsn": "883148",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354217",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883400_1354229.pdf",
        "folderrsn": "883400",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354229",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883401_1354231.pdf",
        "folderrsn": "883401",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354231",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883406_1354239.pdf",
        "folderrsn": "883406",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354239",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883410_1354247.pdf",
        "folderrsn": "883410",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354247",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883411_1354249.pdf",
        "folderrsn": "883411",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354249",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883415_1354257.pdf",
        "folderrsn": "883415",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354257",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883674_1354267.pdf",
        "folderrsn": "883674",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354267",
        "ownerName": "Mr Fagoroyo ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883678_1354275.pdf",
        "folderrsn": "883678",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354275",
        "ownerName": "Mr Bankole Ezekiel",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_884553_1354283.pdf",
        "folderrsn": "884553",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354283",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_884554_1354285.pdf",
        "folderrsn": "884554",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354285",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_884559_1354295.pdf",
        "folderrsn": "884559",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354295",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_884564_1354305.pdf",
        "folderrsn": "884564",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354305",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880607_1354313.pdf",
        "folderrsn": "880607",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354313",
        "ownerName": "Dr Mrs Taiwo Fawehinmi",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880608_1354315.pdf",
        "folderrsn": "880608",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354315",
        "ownerName": "holy Trinity school",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880612_1354323.pdf",
        "folderrsn": "880612",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1354323",
        "ownerName": "unity international school",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883818_1356935.pdf",
        "folderrsn": "883818",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356935",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883819_1356937.pdf",
        "folderrsn": "883819",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356937",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883825_1356949.pdf",
        "folderrsn": "883825",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356949",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883828_1356955.pdf",
        "folderrsn": "883828",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356955",
        "ownerName": "Property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880441_1356957.pdf",
        "folderrsn": "880441",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356957",
        "ownerName": "Mr Dolapo Fatogun",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880444_1356963.pdf",
        "folderrsn": "880444",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356963",
        "ownerName": "Ayeni Samuel",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880447_1356969.pdf",
        "folderrsn": "880447",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356969",
        "ownerName": " ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880448_1356971.pdf",
        "folderrsn": "880448",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356971",
        "ownerName": "path center",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880454_1356981.pdf",
        "folderrsn": "880454",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356981",
        "ownerName": "Property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880457_1356987.pdf",
        "folderrsn": "880457",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356987",
        "ownerName": "Oyin factory",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880851_1356993.pdf",
        "folderrsn": "880851",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356993",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880852_1356995.pdf",
        "folderrsn": "880852",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1356995",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880855_1357001.pdf",
        "folderrsn": "880855",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357001",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880858_1357007.pdf",
        "folderrsn": "880858",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357007",
        "ownerName": "Ebenezer Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880859_1357009.pdf",
        "folderrsn": "880859",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357009",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_880862_1357015.pdf",
        "folderrsn": "880862",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357015",
        "ownerName": "Property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881138_1357035.pdf",
        "folderrsn": "881138",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357035",
        "ownerName": "Joshmach Foods",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881139_1357037.pdf",
        "folderrsn": "881139",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357037",
        "ownerName": "Tongue Tells Happy World",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881413_1357053.pdf",
        "folderrsn": "881413",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357053",
        "ownerName": "Chigozie Stanley",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881420_1357061.pdf",
        "folderrsn": "881420",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357061",
        "ownerName": "general endeavours station",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881423_1357067.pdf",
        "folderrsn": "881423",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357067",
        "ownerName": "Wema Bank",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881645_1357075.pdf",
        "folderrsn": "881645",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357075",
        "ownerName": "uchecare care",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_881065_1357087.pdf",
        "folderrsn": "881065",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357087",
        "ownerName": "X' Max Hotels",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_883921_1357105.pdf",
        "folderrsn": "883921",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1357105",
        "ownerName": "property Owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950875_1358497.pdf",
        "folderrsn": "950875",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358497",
        "ownerName": "property owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950878_1358503.pdf",
        "folderrsn": "950878",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358503",
        "ownerName": "property owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950879_1358505.pdf",
        "folderrsn": "950879",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358505",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950882_1358511.pdf",
        "folderrsn": "950882",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358511",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950885_1358517.pdf",
        "folderrsn": "950885",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358517",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950886_1358519.pdf",
        "folderrsn": "950886",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358519",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950891_1358529.pdf",
        "folderrsn": "950891",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358529",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950892_1358531.pdf",
        "folderrsn": "950892",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358531",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950894_1358535.pdf",
        "folderrsn": "950894",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358535",
        "ownerName": "property owner",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950896_1358539.pdf",
        "folderrsn": "950896",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358539",
        "ownerName": "property Owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950899_1358545.pdf",
        "folderrsn": "950899",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358545",
        "ownerName": "property Owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950900_1358547.pdf",
        "folderrsn": "950900",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358547",
        "ownerName": "property Owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950901_1358549.pdf",
        "folderrsn": "950901",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358549",
        "ownerName": "property Owner ",
        "status": "Completed"
    },
    {
        "path": "C:\\LUC_BILLS\\LUC_BILL_950903_1358553.pdf",
        "folderrsn": "950903",
        "dateGenerted": "2021-01-25 00:00:00.0",
        "billNumber": "1358553",
        "ownerName": "property Owner ",
        "status": "Completed"
    }
]
console.log(data);
console.log(data[0].dateGenerted);

//table construtor
// function table(ownerName, folderrsn, billNumber, dateGenerted, status){
//     this.ownerName = ownerName;
//     this.folderrsn = folderrsn;
//     this.billNumber = billNumber;
//     this. dateGenerted = dateGenerted;
//     this.status = status;

// }
// const table = new table(ownerName, folderrsn, billNumber, dateGenerted, status);

let table = document.querySelector('#people tbody');
let dateGenerted = "#";
let trs="";
let count = 0;
for (i = 0; i < data.length; i++){
    
    let tr ="<tr>"     
    td=`
       <td> ${++count}</td>
       <td> ${data[i].ownerName}</td>
       <td> ${data[i].folderrsn}</td>
        <td> ${data[i].billNumber}</td>
        <td> ${data[i].dateGenerted}</td>
        <td>${data[i].status} </td>
        <td>${data[i].path} <button type="submit"class="btn btn-primary"> &#10515; Download</button></td>`;
    tr+=td;
    tr+="</tr>";
    trs+=tr;
}
 console.log(trs);
table.innerHTML=trs; 
// data.forEach(function(data){
//     // console.log(data);
// });
