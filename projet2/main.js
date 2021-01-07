let i;
let arrSeqHello = [];
for (let i = 1; i < 26; i++)  {
	arrSeqHello.push({'id':'chapter0:'+'seq'+i,'used':false});//'seq':seqs//,
}

let arrSeqChapOne = [];
for (let i = 1; i < 18; i++)  {
	arrSeqChapOne.push({'id':'chapter1:'+'seq'+i,'used':false});//'seq':seqs//,
}

let arrSeqChapTwo = [];
for (let i = 1; i < 5; i++)  {
	arrSeqChapTwo.push({'id':'chapter2:'+'seq'+i,'used':false, 'end':false});//'seq':seqs//,
}
for (let i = 5; i < 8; i++)  {
	arrSeqChapTwo.push({'id':'chapter2:'+'seq'+i,'used':false, 'end':true});//'seq':seqs//,
}

let arrReact = [];
for (let i = 1; i < 50; i++)  {
	arrReact.push({'id':'react:'+'seq'+i,'used':false});//'seq':seqs//,
}

let arrSeqChapThree = [];
for (let i = 1; i < 3; i++)  {
	arrSeqChapThree.push({'id':'chapter3:'+'seq'+i,'used':false, 'end':true});//'seq':seqs//,
}

function useSeqHello(){
	let unusedSeq = arrSeqHello.filter(c=>c.used==false);
	if(unusedSeq.length==0)return false;
	curSeq = unusedSeq[getRandomInt(0,unusedSeq.length-1)];
	curSeq.used = true;
	return curSeq;
}

function useSeqChapOne(){
	let unusedSeq = arrSeqChapOne.filter(c=>c.used==false);
	if(unusedSeq.length==0)return false;
	curSeq = unusedSeq[getRandomInt(0,unusedSeq.length-1)];
	curSeq.used = true;
	return curSeq;
}

function useSeqChapTwo(){
	let unusedSeq = arrSeqChapTwo.filter(c=>c.used==false);
	if(unusedSeq.length==0)return false;
	curSeq = unusedSeq[getRandomInt(0,unusedSeq.length-1)];
	curSeq.used = true;
	return curSeq;
}

function useSeqChapThree(){
	let unusedSeq = arrSeqChapThree.filter(c=>c.used==false);
	if(unusedSeq.length==0)return false;
	curSeq = unusedSeq[getRandomInt(0,unusedSeq.length-1)];
	curSeq.used = true;
	return curSeq;
}

function useReact(){
	let unusedSeq = arrReact.filter(c=>c.used==false);
	if(unusedSeq.length==0)return false;
	curSeq = unusedSeq[getRandomInt(0,unusedSeq.length-1)];
	curSeq.used = true;
	return curSeq;
}

function chapOne(){
	console.log(useSeqHello());
	console.log(useSeqHello());
  console.log(useSeqHello());
	console.log(useSeqChapOne());
	console.log(useSeqChapOne());
}

function chapTwo(){
	console.log(useSeqChapTwo());
	//let ending = arrSeqChapTwo.filter(c=>c.end==true);
//	if (end==true){
  //let end = arrSeqChapTwo.filter(c=>c.i);
	if (i > 4){
		theEnd()
	}else{
//	if (curSeq < 5){
	console.log(useReact());
	console.log(useSeqChapTwo());
	//let end = arrSeqChapTwo.filter(c=>c.i);
		if (i > 4){
		chapThree();
	}
	else {
		theEnd();
	}
}
}

function chapThree(){
	console.log(useSeqChapThree());
	theEnd();
}


function theEnd(){
	console.log("The end");
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
  }

chapOne();
chapTwo();
