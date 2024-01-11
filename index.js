var names = prompt("enter your name");
if(names!=null){
 document.querySelector(".message").textContent="Hi "+names+", Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us.";
}
else
document.querySelector(".message").textContent="Love is in the air, and we're thrilled to announce our big day! We would be absolutely delighted by your presence at our wedding celebration to shower your blessings on us."+String.fromCodePoint(0x1FAE3);

