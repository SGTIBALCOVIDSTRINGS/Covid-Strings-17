doc.type html
html lang en 
script
header=document create.element(header)
header.style.backgroundcolor=#4caf50
header.style.color=’white’
header.style.padding=’10px’
header.style.textalign=’center’
header.style.text.fontsize=’24px’
header.textcontent=’welcome to covid strings17 first round’
document appendchild(header)
<header.html>
heading variables 
the heading numbers that determine where each heading and subheading Go 
heading1=first round overview
heading2=matchups
heading3=first round questions
heading4=advancing rounds
subheading1=team stealing
subheading2=result for matchup1
subheading3=result for matchup2
subheading4=result for matchup3
subheading5=result for matchup4
<header.html>
first round overview
an overview of the first round of covid strings17 includes seeding 
html
head
utf8
viewportcontent=width=device-width,initial-scale=one
title covid strings17 first round bracket
div id bracket class bracket div
script src bracket.js
link rel= stylesheet href=css
head
body
bracket-container{}
matchup
solid zero;
padding 
text align center 
filename=covid strings17 first round.js
first round=(highest overall seed ,second highest seed third highest seed first middle seed, second middle seed,  third lowest seed ,second lowest seed,lowest overall seed)
highest overall seed = 1 seed
second highest seed=2 seed
third highest seed=3 seed
firstmiddleseed=4seed
second middle seed = 5 seed
third lowest seed= 6 seed
second lowest seed = 7 seed
lowest overall seed = 8 seed
covidstringsteamlist17=[yellow,green,red,magenta,black,white,blue,violet]
<header.html>
matchups 
for first round there are8 teams which equals4 matchups 
matchup1=(blue versus green)
bracket = getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
matchup2=(white versus red)
bracket = getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
matchup3=(violet versus yellow)
bracket = getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
matchup4=(black versus magneta)
bracket = getelementbyid(bracket);
document.createelement 
matchupdiv.classname=(matchup)
matchupdiv.inner html =[matchup]
rounddiv.appendchild(matchup)
for(i in covid strings first round)
round div=create element
round div class name=covid strings17 first round
bracket.appendchild(round div)
if (event.target.covid strings seed list.contains(matchup))
return matchup
else:
create matchup
<header.html>
first round questions
the questions asked in the first round of the covid strings contest
java util.scanner
java.util
first round questions=questions[1-14]
Collections.Shuffle(Arrays.Aslist(Questions)
question1
question2
question3
question4
question5
question6
question7
question8
question9
question10
question11
question12
question13
question14
if selectedanswer==correct:
return true
else:
return false
if selectedanswer=incorrect
return false
else:
return true
team1=lower ranked seed
team2=the higher seeded opponent
points: 10 points or 20 points
<subheading.html>
team stealing
steal points(stealingteam,victimteam,pointstosteal)
if(victimteam.points>=pointtosteal)
victimteam.points-=pointtosteal;
stealingteampoints+=pointstosteal
console.log([stealingteam.name} stole points from {victim team name}!)
else:
console.log({victimteam.name} doesnt have enough points to steal)
if teams final answer==incorrect:
opposing team steals
else:
change covid strings matchup score
<header.html>
advancing rounds
contains criteria required for a team to advance to the second round 
advancingteam=slice(currentteams)
<subheading.html>
result for matchup1 
the code for how to determine the end result of matchup1 of covid strings 
result=declarewinner(matchup1)
if green score>=forty:
console.log(green peacemakers win)
else:
remain
if blue score>=forty:
console.log(blue curve crushers win)
else:
remain
<subheading.html>
result for matchup2 
the code for how to determine the end result of matchup2 of covid strings 
result=declarewinner(matchup2)
if red score>=forty:
console.log(red protein spikers win)
else:
remain
if white score>=forty:
console.log(white transit angels win)
else:
remain
<subheading.html>
result for matchup3 
the code for how to determine the end result of matchup3 of covid strings 
result=declarewinner(matchup3)
if yellow score>=forty:
console.log(yellow moxie wins)
else:
remain
if violet score>=forty:
console.log(violet relivers win)
else:
remain
<subheading.html>
result for matchup4 
the code for how to determine the end result of matchup4 of covid strings 
result=declarewinner(matchup4)
if magenta score=forty:
console.log(magenta magnetizers win)
else:
remain
if black score>=forty:
console.log(black night riders win)
else:
remain
return filename
