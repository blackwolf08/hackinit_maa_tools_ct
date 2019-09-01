const admin = require('firebase-admin');
const problems = ['headache', 'stomach ache', 'nausea', 'dizziness', 'i am not feeling well'];
const negations = ['i dont have','i don\'t have', 'i am not feeling','i am not having','die','fuck','shit','piece of shit'];
const cures = {
    "headache" : "To relieve headache you can safely take acetaminophen tablets.",
    "stomach ache" : "To relieve sharp pains or cramps from stretched abdominal muscles and ligaments, rest or take a warm bath or shower. Regular exercise will strengthen and tone your abdominal muscles.",
    "nausea" : "Take a Vitamin B6 Supplement as Vitamin B6 is increasingly recommended as an alternative treatment for pregnant women preferring to avoid anti-nausea medications.",
    "dizziness" : "Take your time getting up from sitting or lying down. Avoid lying on your back in the second and third trimester. Eat healthy food frequently to avoid low blood sugar.",
    "i am not feeling well" : "This situation in pregnancy can occur due to a number of factors, I cannot give a definite solution to this problem. Let me book an appointment with a doctor for you.\n\nTo book and appointment type 'book' in the reply."
}
const causes = {
    "headache" : "During the course of pregnancy, your body experiences a surge of hormones and an increase in blood volume. These two changes can cause more frequent headaches.",
    "stomach ache" : "Some abdominal aches and pains during pregnancy are quite common and generally pose no threat to you and your baby.",
    "nausea" : "The exact cause of nausea and vomiting in pregnancy is not clear. Most evidence points to rapid changes in hormone levels",
    "dizziness" : "The main cause of dizziness in pregnancy is due to the rising hormones that cause your blood vessels to relax and widen.",
    "i am not feeling well" :""
}
const facts = [
    'Every child should have the opportunity to grow up in a family. If a family is unable to care for the child, steps should be taken by the authorities to address the reasons and make every effort to keep the family together.','Every child has a right to a name and nationality. Registering a child\'s birth helps to ensure a child\'s right to education, health care and legal and social services. Birth registration is a vital step towards protection from abuse and exploitation.','Girls and boys must be protected from all forms of violence and abuse. This includes physical, sexual and emotional abuse, neglect and harmful practices such as child marriage and genital mutilation/cutting of girls. Families, communities and authorities are responsible for ensuring this protection.','Children must be protected from all work that is hazardous. Work should not prevent them from attending school. Children should never be involved in the worst forms of child labour, such as slavery, forced labour, drug production or trafficking.','Girls and boys can be at risk of sexual abuse and exploitation in their home, school, workplace or community. Measures should be taken to prevent sexual abuse and exploitation. Sexually abused and exploited children need immediate help to stop such abuse.','Children are vulnerable to trafficking where protection for children is weak or missing. The government, civil society and families are responsible for preventing trafficking, as well as helping children who are victims to reintegrate into their families and communities, if it is in their best interest.','Justice for children should be based on child rights. Depriving children of their liberty (incarcerating them) must always be a last resort. Procedures that are sensitive to children should be put in place for children who are victims or witnesses of crime.','Income support and social welfare services can help keep families together and children in school and ensure access to health care.','All children have a right to age-appropriate information, to be heard and to participate in making decisions that concern them. Fulfillment of this right enables children to take an active role in their own protection against abuse, violence and exploitation, and to become active citizens.',"Provide the pregnant woman with information on the changes occurring in her body", "Check for high blood pressure, which can be dangerous to both mother and child", "Check for anaemia and provide iron-folic acid supplements, ensure that the woman understands the importance of taking the supplements and explain the normal side effects, including constipation and nausea", "Screen for night blindness to determine if the woman needs to be treated with vitamin A and, if necessary, prescribe vitamin A to protect the mother and promote the healthy development of the fetus", "Review the mother's tetanus immunization status and give the dose(s) needed to protect her and her newborn baby", "Encourage all pregnant women to use only iodized salt in food preparation to help protect their children from mental and physical disabilities and to protect themselves from goiter", "Encourage all pregnant women to have more nutritious meals, increased quantities of food and more rest than usual", "Prescribe antimalarial tablets and recommend use of an insecticide-treated mosquito net where needed", "Prescribe deworming medication, as necessary, from the second trimester onward to help reduce low birth weight", "Prepare the mother and father for the experience of childbirth and caring for their newborn, give the mother advice on breastfeeding and caring for herself, and provide the father with guidance on how he can assist", "Advise the pregnant woman and her family on where the birth should take place and how to get help if complications arise before and during childbirth or immediately after delivery","Provide referrals when needed to groups in the community that provide support and protect pregnant women living with violence", "Check for infections during pregnancy, especially urinary tract infections and STIs, including HIV, and treat them with appropriate medications"
]

function generateMessage(str) {
    let msg = `${causes[str]}\n\n${cures[str]}`;
    return msg;
}

function generateFact() {
    let msg = `${facts[Math.floor(Math.random()*facts.length)]}`;
    return msg;
}

function generateGreeting() {
    let msg =  `Hi, I am your online examiner for the day. How may I help you? You can ask me about how you are feeling today or are you having any symptoms abnormal to your daily routine.`;
    return msg;
}
module.exports = function(req, res) {
    //NLP will replace this code!
    let str = req.body.msg.toLowerCase();
    let reply = "I am sorry but I am not capable to understand the problem you are facing right now. Allow me to book a doctor for your better health checkup and examination.\n\nTo book an appointment, please reply with 'book' in the chat.", flag = 0;
    for(let i = 0; i < negations.length; i++) {
        if(str.search(negations[i]) != -1) {
            flag = 1;
        }
    }
    if(str.search('book') != -1) { 
        flag = 1;
        reply = "batri";
    }
    if(str.search('facts') != -1 || str.search('fact') != -1 && flag != 1) {
        flag = 1;
        reply = generateFact();
    }
    if((str.search('hey') || str.search('hello') || str.search('hi'))&& flag != 1) {
        reply = generateGreeting();
    }
    if(flag != 1){
        for(let i = 0; i < problems.length ; i++) {
            if(str.search(problems[i]) != -1) {
                reply = generateMessage(problems[i]);
                break;
            }
        }
    }
    return res.status(200).send(reply);
}