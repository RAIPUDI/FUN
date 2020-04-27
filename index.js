var boy = prompt("Enter the name of the Boy");
var girl = prompt("Enter the name of the girl");
var final_boy=boy;
var final_girl=girl;
var final1=boy;
var final2=girl;

boy.toLowerCase();
girl.toLowerCase();

var total;

var len=girl.length;
total=boy.length + girl.length;



for(i=0;i<boy.length;i++)
{
  var short=boy.slice(i,i+1);
  for(j=0;j<girl.length;j++)
  {

    if(short===girl.slice(j,j+1))
    {
      total=total-2;
      first=girl.slice(0,j-1);
      second=girl.slice(j+1,len);
      girl=first+second;
      break;



    }
  }
}

var point=0;
var temp;
var count;
var final;
var check;


var array=[1,2,3,4,5,6];
var joint=0;
while(joint<5)
{
check=6-joint;
joint=joint+1;
count=0;
temp=total;



while(count<temp)
{
count=count+1;

point=point+1;
point=(point)%(check);

}

array.splice(point-1,1);
point=point-1;
if(point==-1)
{
  point=array.length-1;
}
}
var final1;


final=array[0];

if(final===1)
{
  final1="HEEY "+final_boy+" and "+final_girl+" are friends";
  document.querySelector(".ok").textContent=final1;

}

else if(final==2)
{
  final1="HEEY "+final_boy+" and "+final_girl+" are Lovers";
  document.querySelector(".ok").textContent=final1;


}

else if(final==3)
{
  final1="HEEY "+final_boy+" and "+final_girl+" has an affection";
  document.querySelector(".ok").textContent=final1;
}

else if(final==4)
{
  final1="HEEY "+final_boy+" and "+final_girl+" Will Marraige each other";
  document.querySelector(".ok").textContent=final1;
}
else if(final ==5)
{
  final1="HEEY "+final_boy+" and "+final_girl+" are Enemies";
  document.querySelector(".ok").textContent=final1;
}

else if (final==6)
{
  final1="HEEY "+final_boy+" and "+final_girl+" are Sisters";
  document.querySelector(".ok").textContent=final1;
}
