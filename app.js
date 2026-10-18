const workouts = {
Monday:{title:"Active Recovery, Mobility & Core",purpose:"Mobility + core stability/control",sections:[
{name:"Active Mobility",exercises:[
["Easy Treadmill Walk","3–5 min","Easy warm-up"],
["Cat-Cow","8–10 reps","Smooth spinal motion"],
["Thread the Needle","6–8/side","Reach underneath and rotate through the upper back"],
["Thoracic Rotations","8/side","Controlled thoracic rotation; keep hips quiet"],
["90/90 Hip Switches","8–10/side","Work internal and external hip rotation"],
["Half-Kneeling Hip-Flexor Stretch + Reach","30 sec/side × 2","Glute engaged; tall torso"],
["Adductor Rock-Backs","8–10/side","Move into comfortable inner-thigh tension"],
["Active Hamstring Floss","8–10/side","Move gently in and out of tension"],
["Knee-to-Wall Ankle Mobilization","10/side","Keep heel firmly down"],
["Supported Deep Squat Hold","30–45 sec × 2","Use comfortable stance and depth"],
["Floor Slides / Snow Angels","10–12","Lie supine and sweep arms through comfortable shoulder ROM"],
["Band Pull-Aparts","12–15","Scapular control; avoid shrugging"],
["Quadruped Thoracic Rotations","8/side","Hand behind head; rotate elbow down then toward ceiling"]
]},
{name:"Core A — Stability & Control",exercises:[
["Dead Bug","2 × 8/side","3-sec extension; keep low back gently pressed down"],
["Pallof Press","2 × 10/side","Resist rotation; ribs stacked over pelvis"],
["Bird Dog","2 × 8/side","Reach long; keep pelvis level"],
["Side Plank","2 × 25–40 sec/side","Straight line; don't let hips sag"],
["DB Suitcase Hold","2 × 30–45 sec/side","Stand tall; resist lateral bending"],
["Reverse Crunch","2 × 10–12","Curl pelvis toward ribs; no leg swing"]
]}]},
Tuesday:{title:"Upper Body PT & Full",purpose:"Primary upper-body strength/mass maintenance",sections:[{name:"Strength Maintenance",exercises:[
["Upper Body PT Warm-Up","1 round","Complete established shoulder/PT warm-up before strength work"],
["DB Floor Press","3 × 6–8","Primary press; leave 1–3 reps in reserve"],
["One-Arm DB Row","3 × 6–8/side","Controlled pull; avoid torso rotation"],
["DB Floor Flye","2 × 10–12","Floor limits shoulder extension"],
["Band Lat Pulldown","2 × 8–10","Full controlled range"],
["DB Shoulder Press","2 × 8–10","Avoid excessive back arch"],
["DB Lateral Raise","2 × 10–15","Controlled; stop before shrugging"],
["DB Curl","2 × 8–12","Full range"],
["Triceps Extension / Pressdown","2 × 8–12","Controlled"]
]}]},
Wednesday:{title:"Backpacking Legs",purpose:"Moderate hiking-specific strength/endurance",sections:[{name:"Maintenance Session",exercises:[
["Treadmill Warm-Up","15 min","Easy-to-moderate walking warm-up before leg work"],
["DB Step-Ups","2 × 8/leg","Drive through the working leg"],
["Slow Eccentric Step-Downs","2 × 6–8/leg","Slow lowering; control the knee"],
["Heel-Elevated Goblet Squat","2 × 10","Moderate load"],
["Static Split Squat","2 × 8/leg","Comfortable foot position"],
["Wall Sit","2 × 30–45 sec","Steady breathing"],
["Calf Raises","2 × 12–15","Full stretch and controlled rise"]
]}]},
Thursday:{title:"Yoga",purpose:"Full-body flexibility, balance and recovery",sections:[{name:"Established Yoga Flow",exercises:[
["Full Vinyasa Flow","90 min","Use your established sequence. Treat as mobility, balance and recovery rather than another strength session."]
]}]},
Friday:{title:"Heavy Legs",purpose:"Primary lower-body strength + vertical pulling",sections:[{name:"Heavy Strength",exercises:[
["Stair-Climber Warm-Up","15 min","Easy-to-moderate warm-up before heavy leg work"],
["Leg Press","3 × 6–8","Heavy, controlled"],
["Hungarian Split Squat","3 × 6–8/leg","Controlled descent; comfortable rear-foot position"],
      ["DB Step-Ups","3 × 6–8/leg","Drive through the working leg; control the lowering"],
["Leg Curl","3 × 8–10","Full controlled ROM"],
["Leg Extension","2 × 8–10","Controlled"],
["DB Glute Bridge / Hip Thrust","3 × 8–10","Pause at top"],
["Eccentric Step-Down","2 × 8/leg","Slow lowering"],
["Calf Raise","2 × 10–15","Full stretch"],
["Slow Assisted Pull-Up","3 × 6–8","2-sec pull / 1-sec hold / 3–4-sec lower"]
]}]},
Saturday:{title:"Active Recovery, Mobility & Core",purpose:"Mobility + core strength/rotation control",sections:[
{name:"Active Mobility",exercises:[
["Easy Treadmill Walk","3–5 min","Easy warm-up"],
["Cat-Cow","8–10 reps","Smooth spinal motion"],
["Thread the Needle","6–8/side","Reach underneath and rotate through the upper back"],
["Thoracic Rotations","8/side","Controlled thoracic rotation; keep hips quiet"],
["90/90 Hip Switches","8–10/side","Work internal and external hip rotation"],
["Half-Kneeling Hip-Flexor Stretch + Reach","30 sec/side × 2","Glute engaged; tall torso"],
["Adductor Rock-Backs","8–10/side","Move into comfortable inner-thigh tension"],
["Active Hamstring Floss","8–10/side","Move gently in and out of tension"],
["Knee-to-Wall Ankle Mobilization","10/side","Keep heel firmly down"],
["Supported Deep Squat Hold","30–45 sec × 2","Use comfortable stance and depth"],
["Floor Slides / Snow Angels","10–12","Supine snow-angel motion for shoulder ROM"],
["Band Pull-Aparts","12–15","Scapular control; avoid shrugging"],
["Quadruped Thoracic Rotations","8/side","Hand behind head; rotate elbow down then toward ceiling"]
]},
{name:"Core B — Strength & Rotation Control",exercises:[
["Forearm Plank","2 × 30–60 sec","Brace; avoid sagging or piking"],
["Band Chop — High to Low","2 × 10/side","Controlled trunk rotation"],
["Slow Mountain Climber","2 × 8/side","Move slowly without pelvis rocking"],
["Side Plank with Reach-Through","2 × 6–8/side","Reach under torso; rotate through upper back"],
["Bear Plank DB Drag","2 × 6–8/side","Knees just off floor; resist hip rotation"],
["Bent-Knee Leg Raise / Reverse Crunch","2 × 10–12","Slow pelvic curl; avoid momentum"]
]}]},
Sunday:{title:"Upper Body PT & Microdose",purpose:"Shoulder health + second upper-body stimulus",sections:[{name:"PT & Microdose",exercises:[
      ["Warm-Up / Upper Body PT","1 round","Complete established shoulder/PT warm-up first"],
      ["DB Floor Press","3 × 8–12","Primary push; controlled lowering and keep shoulders comfortably set"],
      ["One-Arm DB Row","3 × 8–12","Primary pull; controlled pull and full comfortable range"],
      ["DB Shoulder Press","2 × 8–12","Controlled press; stop short of painful shoulder range"],
      ["Decline Push-Ups","2 × 6–10","Bodyweight; keep 2–3 reps in reserve"],
      ["DB Flys","2 × 12–15","Controlled range; avoid excessive shoulder extension"],
      ["Band Pull-Aparts","2–3 × 12–15","Scapular control; avoid shrugging"],
      ["DB Curl","2–3 × 8–12","Controlled reps; avoid swinging"],
      ["Triceps","2–3 × 8–12","Controlled reps; keep elbows stable"]
    ]}]}
};

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const app=document.getElementById("app");
const tabs=[...document.querySelectorAll(".tabs button")];

function todayName(){return days[new Date().getDay()]}
function setTab(name){

tabs.forEach(b=>b.classList.toggle("active",b.dataset.view===name))}
const recoveryDescriptions={"Easy Treadmill Walk": "Walk at an easy pace for 3–5 minutes. The goal is to raise body temperature and loosen up, not to create fatigue.", "Cat-Cow": "Start on hands and knees with hands under shoulders and knees under hips. Slowly arch the back as you lift the chest, then round the spine and gently tuck the chin. Move smoothly for 8–10 repetitions.", "Thread the Needle": "Start on hands and knees. Slide one arm underneath the opposite arm as your upper back rotates toward the floor. Return, then rotate that arm toward the ceiling. Keep the hips relatively still. Do 6–8 per side.", "Thoracic Rotations": "Use a comfortable standing, kneeling, or athletic stance. Keep the hips mostly square and rotate through the upper and middle back. Move slowly through a comfortable range for 8 repetitions per side.", "90/90 Hip Switches": "Sit with both knees bent about 90 degrees and feet on the floor. Keeping the torso tall, rotate both knees together from one side to the other. Move under control for 8–10 repetitions per side.", "Half-Kneeling Hip-Flexor Stretch + Reach": "Kneel on one knee with the opposite foot forward. Gently tuck the pelvis and shift forward until you feel a stretch at the front of the rear hip. Reach the arm on the kneeling side overhead. Hold about 30 seconds and repeat twice per side.", "Adductor Rock-Backs": "Begin on hands and knees. Extend one leg straight out to the side with the foot supported. Keep your back neutral and slowly rock your hips backward until you feel the inner-thigh stretch, then return. Do 8–10 per side.", "Active Hamstring Floss": "Place one heel forward with the knee nearly straight. Hinge gently at the hips toward that leg, then ease back out. Keep the movement dynamic rather than holding a deep stretch. Do 8–10 per side.", "Knee-to-Wall Ankle Mobilization": "Face a wall with one foot flat on the floor. Keeping the heel down, drive the knee forward over the toes toward the wall. Move the foot closer or farther away so you can reach the wall without the heel lifting. Do 10 per side.", "Supported Deep Squat Hold": "Hold a sturdy support and lower into a comfortable squat. Keep your feet fully supported and use whatever stance is most comfortable for your fused right big toe. Hold 30–45 seconds, twice. Do not force depth.", "Floor Slides / Snow Angels": "Lie on your back with your arms against or close to the floor. Start with the arms lower and slowly sweep them outward and overhead like making a snow angel, then return. Keep the ribs controlled and use only a comfortable shoulder range. Do 10–12 repetitions.", "Band Pull-Aparts": "Hold a light resistance band in front of you around shoulder height. Keeping the elbows nearly straight, pull your hands apart by squeezing the shoulder blades together. Avoid shrugging. Return slowly for 12–15 repetitions.", "Quadruped Thoracic Rotations": "Start on hands and knees and place one hand behind your head. Bring that elbow gently down toward the opposite wrist, then rotate the elbow upward toward the ceiling. Keep the hips quiet and rotate through the upper back. Do 8 per side.", "Dead Bug": "Lie on your back with arms pointing upward and hips and knees bent about 90 degrees. Brace your abdomen and gently press the low back toward the floor. Slowly extend the opposite arm and leg, stopping before the back begins to arch. Return and alternate for 8 per side.", "Pallof Press": "Anchor a band around chest height and stand sideways to it. Hold the band at your chest, brace your trunk, then press your hands straight forward. Resist the band's pull to rotate you. Return slowly for 10 repetitions per side.", "Bird Dog": "Start on hands and knees. Brace lightly, then extend the opposite arm and leg. Think about reaching long rather than lifting high. Keep the pelvis level, return slowly, and alternate for 8 per side.", "Side Plank": "Lie on your side and support yourself on one forearm with the elbow under the shoulder. Lift the hips until the body forms a straight line. Use the feet or the lower knee for support as needed. Hold 25–40 seconds per side.", "DB Suitcase Hold": "Stand tall holding one dumbbell at your side. Brace your abdomen and resist leaning toward or away from the weight. Keep the shoulders and pelvis level. Hold 30–45 seconds per side.", "Reverse Crunch": "Lie on your back with hips and knees bent. Brace your abdomen, bring the knees toward the chest, and curl the pelvis so the tailbone lifts slightly from the floor. Lower slowly without swinging the legs. Do 10–12 repetitions.", "Forearm Plank": "Support yourself on your forearms and toes with elbows under shoulders. Brace the abdomen and glutes and maintain a straight line from shoulders through hips. Avoid sagging or piking. Hold 30–60 seconds.", "Band Chop — High to Low": "Anchor a resistance band above head height and stand sideways to the anchor. Hold the band with both hands and pull diagonally down across the body toward the opposite hip. Allow controlled torso rotation, then return slowly. Do 10 per side.", "Slow Mountain Climber": "Start in a high plank with hands under shoulders. Brace your trunk and slowly bring one knee toward the chest without allowing the hips to rock. Return the foot and alternate for 8 per side.", "Side Plank with Reach-Through": "Begin in a side plank with the top arm reaching toward the ceiling. Slowly reach that arm underneath your torso as you rotate through the upper back, then reopen toward the ceiling. Keep the hips elevated. Do 6–8 per side.", "Bear Plank DB Drag": "Start on hands and knees with a dumbbell just outside one hand. Lift the knees only 1–2 inches from the floor. With the opposite hand, drag the dumbbell underneath your body to the other side. Keep the hips as still as possible. Alternate for 6–8 drags per side.", "Bent-Knee Leg Raise / Reverse Crunch": "Lie on your back with the knees bent. Bring the knees toward your torso under control and finish with a small pelvic curl so the tailbone lifts slightly. Lower slowly and avoid momentum. Do 10–12 repetitions."};

function exerciseHTML(e, day, section){
  const [name,dose,cue]=e; const key=`log:${day}:${name}`; const saved=JSON.parse(localStorage.getItem(key)||"{}");
  const warmup=name.toLowerCase().includes("warm-up") || name.toLowerCase().includes("warmup");
  const loggable=["Tuesday","Wednesday","Friday","Sunday"].includes(day) && !warmup;
  const repTargets={
    "DB Floor Press":["3 sets × 6–8","2–3 sets × 10–12"],
    "One-Arm DB Row":["3 sets × 6–8","2–3 sets × 10–12"],
    "DB Floor Flye":["2 sets × 8–10","2 sets × 12–15"],
    "Band Lat Pulldown":["2–3 sets × 6–8","2 sets × 12–15"],
    "DB Shoulder Press":["2–3 sets × 6–8","2 sets × 10–12"],
    "DB Lateral Raise":["2 sets × 8–10","2–3 sets × 12–15"],
    "DB Curl":["2 sets × 6–8","2–3 sets × 10–15"],
    "Triceps Extension / Pressdown":["2 sets × 6–8","2–3 sets × 10–15"],
    "Leg Press":["3 sets × 6–8","2–3 sets × 12–15"],
    "Hungarian Split Squat":["3 sets × 6–8/leg","2–3 sets × 10–12/leg"],
    "DB Step-Ups":["3 sets × 6–8/leg","2–3 sets × 10–12/leg"],
    "Leg Curl":["3 sets × 6–8","2–3 sets × 10–15"],
    "Leg Extension":["2 sets × 6–8","2–3 sets × 12–15"],
    "DB Glute Bridge / Hip Thrust":["3 sets × 6–8","2–3 sets × 10–15"],
    "Calf Raise":["2–3 sets × 6–10","2–3 sets × 12–20"],
    "Slow Assisted Pull-Up":["3 sets × 5–8","2–3 sets × 10–12"]
  };
  const targets=repTargets[name];
  const dualMode=(day==="Tuesday" || day==="Friday") && !!targets; let fields="";
  if(loggable && dualMode){ fields=`<div class="mode-logs"><div class="mode-log"><div class="mode-title">Heavy <span>${targets[0]}</span></div><div class="auto-fields"><label>Weight / assistance<input data-key="${key}" data-mode="heavy" data-field="weight" value="${saved.heavy?.weight||""}" placeholder="Weight"></label><label>Reps / notes<input data-key="${key}" data-mode="heavy" data-field="reps" value="${saved.heavy?.reps||""}" placeholder="Reps / notes"></label></div></div><div class="mode-log"><div class="mode-title">Capacity <span>${targets[1]}</span></div><div class="auto-fields"><label>Weight / assistance<input data-key="${key}" data-mode="capacity" data-field="weight" value="${saved.capacity?.weight||""}" placeholder="Weight"></label><label>Reps / notes<input data-key="${key}" data-mode="capacity" data-field="reps" value="${saved.capacity?.reps||""}" placeholder="Reps / notes"></label></div></div></div>`; }
  else if(loggable){ fields=`<div class="auto-fields standard-fields"><label>Weight / assistance<input data-key="${key}" data-mode="standard" data-field="weight" value="${saved.standard?.weight||saved.weight||""}" placeholder="Weight"></label><label>Reps / notes<input data-key="${key}" data-mode="standard" data-field="reps" value="${saved.standard?.reps||saved.reps||""}" placeholder="Reps / notes"></label></div>`; }
  return `<div class="exercise"><div class="exercise-head"><div class="exercise-name">${name}</div>${(day==="Monday"||day==="Saturday") ? `<div class="dose">${dose}</div>` : ""}</div>${fields}<p class="cue">${cue}</p>
    ${((day==="Monday"||day==="Saturday") && recoveryDescriptions[name]) ? `<details class="exercise-description"><summary>Description</summary><div>${recoveryDescriptions[name]}</div></details>` : ""}</div>`;
}
function attachAutosave(){document.querySelectorAll("input[data-key]").forEach(input=>{input.addEventListener("input",()=>{const key=input.dataset.key,mode=input.dataset.mode,field=input.dataset.field;const data=JSON.parse(localStorage.getItem(key)||"{}");if(!data[mode])data[mode]={};data[mode][field]=input.value;data[mode].date=new Date().toISOString();localStorage.setItem(key,JSON.stringify(data));});});}
function workoutView(day,back=true){
 const w=workouts[day];
 app.innerHTML=`${back?'<button class="back" onclick="weekView()">← Back to week</button>':""}
 <section class="hero"><div class="eyebrow">${day}</div><h2>${w.title}</h2><p>${w.purpose}</p></section>
 ${day==="Wednesday"?'<div class="note"><strong>Keep this moderate:</strong> finish feeling trained but clearly capable of doing more so Thursday yoga is not compromised.</div>':""}
 ${w.sections.map(s=>`<section class="card"><h3>${s.name}</h3>${s.exercises.map(e=>exerciseHTML(e,day,s.name)).join("")}</section>`).join("")}
 ${day==="Tuesday"?'<div class="note"><strong>Intensity:</strong> generally leave 1–3 good reps in reserve. No high-volume finisher during the winter phase.</div>':""}
 ${day==="Friday"?'<div class="note"><strong>Pull-up progression:</strong> once all 3 sets reach 8 clean reps at the slow tempo, reduce machine assistance one increment and return to about 6 reps.</div>':""}`;
 attachAutosave();
}
function todayView(){setTab("today");workoutView(todayName(),false)}
window.weekView=()=>{setTab("week");app.innerHTML=`<section class="hero"><div class="eyebrow">Winter Plan</div><h2>Weekly Schedule</h2><p>Tap any day to open its workout.</p></section><div class="day-grid">${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>`<article class="day-card" onclick="workoutView('${d}')"><h3>${d}</h3><p>${workouts[d].title}</p><span class="badge">${workouts[d].purpose}</span></article>`).join("")}</div>`}
window.workoutView=workoutView;
tabs.forEach(b=>b.addEventListener("click",()=>({today:todayView,week:weekView}[b.dataset.view])()));
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
todayView();
