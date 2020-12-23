class Wallet {
  constructor(name, startingBalance, listOfTransaction, description) {
    this.name = name;
    this.startingBalance = startingBalance;
    this.listOfTransaction = listOfTransaction;
    this.description = description;
  }

}


class Transaction {
  constructor(date, tag, note,input,income,expensive) {
    this.date = date;
    this.tag = tag;
    this.note = note;
    this.input=input;
    this.income=income;
    this.expensive=expensive;
  }
}


let walletsList = [];
let activeWallet = null;

let createWalletBtn = document.getElementById("create-wallet-btn");
let name = document.getElementById("wallet-name-input");

let balance = document.getElementById("wallet-balance-input");
let description = document.getElementById("wallet-desc-input");
let transactionForm=document.getElementById("transaction-form");
let transactionsList=document.getElementById("transactions-list");

let transactionInput=document.getElementById("transaction-input");
let transactionNotes=document.getElementById("note-input");
let transactionTags=document.getElementById("tags-input");
let transList=document.getElementById("transactions-list");

let income=document.getElementById("income-radio");
let expense=document.getElementById("expense-radio");

let balanceSpan=document.getElementById("balance-span");
let selectedWalleBtn=document.getElementById("selected-wallet-btn");



//create wallet//
function createWallet(){
let wallet=new Wallet(name.value, balance.value,[], description.value);
walletsList.push(wallet);
 if (document.getElementById('currency-iqd').checked) {
    document.getElementById('currency-span').innerText = "LBP";
  }

balanceSpan.innerHTML=balance.value;
transactionInput.value='';
transactionNotes.value='';
transactionTags.value='';
transList.innerHTML="";
name.value="";
balance.value=""
description.value=""
displayWalletList(walletsList);
saveAllWallets();
console.log(walletsList);
}

//display wallet list//
function displayWalletList(w){
  let htmlContent = '';
  let walletName=document.getElementById("selected-wallet-btn");
  let walletList=document.getElementById("wallet-list");
  for(let i=0;i<w.length;i++){
   walletName.innerHTML=w[i].name;
   htmlContent +=`<p onclick="getActiveWallet(${i})">${w[i].name}</p><hr>`;
  }
 walletList.innerHTML=htmlContent+`<button class="dropdown-item" data-toggle="modal" data-target="#wallet-form-modal">+Create new wallet</button>`;
 saveAllWallets();
}

//get active wallet//
function getActiveWallet(value){
activeWallet=walletsList[value];
balanceSpan.innerHTML=activeWallet.startingBalance;
selectedWalleBtn.innerText=activeWallet.name;
displayTransaction();
return activeWallet;
}

//create transaction//
function createTransaction(e){
e.preventDefault();
let transaction="";
if(activeWallet!=null){
 let result=parseInt(transactionInput.value)+parseInt(activeWallet.startingBalance); 
if(income.checked){
transaction=new Transaction(new Date(),transactionTags.value,transactionNotes.value,transactionInput.value,true,false);
balanceSpan.innerHTML=parseInt(transactionInput.value)+parseInt(activeWallet.startingBalance);
}else{
 transaction=new Transaction(new Date(),transactionTags.value,transactionNotes.value,transactionInput.value,false,true);
 balanceSpan.innerHTML=result-parseInt(transactionInput.value);
}  
}else{
activeWallet=walletsList[0];
 let result=parseInt(transactionInput.value)+parseInt(activeWallet.startingBalance); 
if(income.checked){
transaction=new Transaction(new Date(),transactionTags.value,transactionNotes.value,transactionInput.value,true,false);
balanceSpan.innerHTML=parseInt(transactionInput.value)+parseInt(activeWallet.startingBalance);

}else{
 transaction=new Transaction(new Date(),transactionTags.value,transactionNotes.value,transactionInput.value,false,true);
balanceSpan.innerHTML=result-parseInt(transactionInput.value);

}  
}
activeWallet.listOfTransaction.push(transaction);
console.log(walletsList);
displayTransaction();
saveAllWallets();
}

//display Transaction//
function displayTransaction() {
 let htmlContent = ''; 
   transactionNotes.value='';
   transactionTags.value='';
for(let i=0;i<activeWallet.listOfTransaction.length;i++){
  if(activeWallet.listOfTransaction[i].expensive===true){
   htmlContent +=`<li><span style="color:red">${activeWallet.listOfTransaction[i].input}  note:${activeWallet.listOfTransaction[i].note}  tag:${activeWallet.listOfTransaction[i].tag} date: ${activeWallet.listOfTransaction[i].date}</span></li>`
   }else{
    htmlContent +=`<li><span style="color:green">${activeWallet.listOfTransaction[i].input}  note:${activeWallet.listOfTransaction[i].note}  tag:${activeWallet.listOfTransaction[i].tag} date: ${activeWallet.listOfTransaction[i].date}</span></li>`
   }
}
transList.innerHTML=htmlContent;
}



//load wallets//
function getAllWallets(){
 walletsList=JSON.parse(localStorage.getItem("wallet") || "[]");
document.getElementById('no-wallet-view').classList.add("d-none");
document.getElementById("wallet-view").classList.remove("d-none");
document.getElementById("wallet-btns").classList.remove("d-none");
displayWalletList(walletsList);
//console.log(walletsList)
}


//save wallets in localStorage//
function saveAllWallets(){
localStorage.setItem("wallet", JSON.stringify(walletsList));

}

createWalletBtn.addEventListener('click',createWallet)
transactionForm.addEventListener('submit',createTransaction)
document.addEventListener("DOMContentLoaded", getAllWallets());

