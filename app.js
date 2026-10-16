const workouts = {
Monday:{title:"Active Recovery & Mobility + Core A",purpose:"Mobility + core stability/control",sections:[
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
Tuesday:{title:"Upper Body Full",purpose:"Primary upper-body strength/mass maintenance",sections:[{name:"Strength Maintenance",exercises:[
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
Wednesday:{title:"Backpacking Legs — Maintenance",purpose:"Moderate hiking-specific strength/endurance",sections:[{name:"Maintenance Session",exercises:[
["Treadmill Warm-Up","15 min","Easy-to-moderate walking warm-up before leg work"],
["DB Step-Ups","2 × 8/leg","Drive through the working leg"],
["Slow Eccentric Step-Downs","2 × 6–8/leg","Slow lowering; control the knee"],
["Heel-Elevated Goblet Squat","2 × 10","Moderate load"],
["Static Split Squat","2 × 8/leg","Comfortable foot position"],
["Wall Sit","2 × 30–45 sec","Steady breathing"],
["Calf Raises","2 × 12–15","Full stretch and controlled rise"]
]}]},
Thursday:{title:"90-Minute Vinyasa Yoga",purpose:"Full-body flexibility, balance and recovery",sections:[{name:"Established Yoga Flow",exercises:[
["Full Vinyasa Flow","90 min","Use your established sequence. Treat as mobility, balance and recovery rather than another strength session."]
]}]},
Friday:{title:"Upper Body PT & Microdose",purpose:"Shoulder health + second upper-body stimulus",sections:[{name:"PT & Microdose",exercises:[
["Warm-Up / Upper Body PT","1 round","Complete established shoulder/PT warm-up first"],
["One-Arm DB Row","3 × 8–12","Controlled pull; established load was 60 lb"],
["Decline Push-Ups","3 × 6–8","Bodyweight; keep 2–3 reps in reserve"],
["Band Pull-Aparts","3 × 12","Scapular control; avoid shrugging"],
["DB Shoulder Press","2 × 8–12","Controlled; established load was 2 × 30 lb"],
["DB Flys","2 × 15–20","Controlled range; established load was 2 × 20 lb"],
["DB Curl","2–3 × 8","Established load was 2 × 30 lb"],
["Triceps","2–3 × 8","Established load was 2 × 20 lb"],
["T-Spine Rotations","2 × 10/side","Controlled thoracic rotation"]
]}]},
Saturday:{title:"Active Recovery & Mobility + Core B",purpose:"Mobility + core strength/rotation control",sections:[
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
Sunday:{title:"Heavy Legs + Slow Assisted Pull-Ups",purpose:"Primary lower-body strength + vertical pulling",sections:[{name:"Heavy Strength",exercises:[
["Stair-Climber Warm-Up","15 min","Easy-to-moderate warm-up before heavy leg work"],
["Leg Press","3 × 6–8","Heavy, controlled"],
["Hungarian Split Squat","3 × 6–8/leg","Controlled descent; comfortable rear-foot position"],
["Leg Curl","3 × 8–10","Full controlled ROM"],
["Leg Extension","2 × 8–10","Controlled"],
["DB Glute Bridge / Hip Thrust","3 × 8–10","Pause at top"],
["Eccentric Step-Down","2 × 8/leg","Slow lowering"],
["Calf Raise","2 × 10–15","Full stretch"],
["Slow Assisted Pull-Up","3 × 6–8","2-sec pull / 1-sec hold / 3–4-sec lower"]
]}]}
};

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const app=document.getElementById("app");
const tabs=[...document.querySelectorAll(".tabs button")];

function todayName(){return days[new Date().getDay()]}
function setTab(name){tabs.forEach(b=>b.classList.toggle("active",b.dataset.view===name))}
function exerciseHTML(e, day, section){
  const [name,dose,cue]=e;
  const key=`log:${day}:${name}`;
  const saved=JSON.parse(localStorage.getItem(key)||"{}");
  const loggable=["Tuesday","Friday","Sunday"].includes(day) && !name.toLowerCase().includes("warm-up") && !name.toLowerCase().includes("warmup");
  return `<div class="exercise">
    <div class="exercise-head"><div class="exercise-name">${name}</div><div class="dose">${dose}</div></div>
    ${loggable?`<div class="inline-log">
      <label>Weight / assistance<input id="${cssId(key)}-w" value="${saved.weight||""}" placeholder="Weight"></label>
      <label>Reps / notes<input id="${cssId(key)}-r" value="${saved.reps||""}" placeholder="Reps / notes"></label>
      <button class="save compact" onclick="saveLog('${esc(key)}','${cssId(key)}')">Save</button>
    </div>`:""}
    <p class="cue">${cue}</p>
  </div>`
}
function cssId(s){return s.replace(/[^a-z0-9]/gi,"_")}
function esc(s){return s.replace(/'/g,"\\'")}
window.saveLog=(key,id)=>{
  localStorage.setItem(key,JSON.stringify({weight:document.getElementById(id+"-w").value,reps:document.getElementById(id+"-r").value,date:new Date().toISOString()}));
  alert("Saved on this device.");
};
function workoutView(day,back=true){
 const w=workouts[day];
 app.innerHTML=`${back?'<button class="back" onclick="weekView()">← Back to week</button>':""}
 <section class="hero"><div class="eyebrow">${day}</div><h2>${w.title}</h2><p>${w.purpose}</p></section>
 ${day==="Wednesday"?'<div class="note"><strong>Keep this moderate:</strong> finish feeling trained but clearly capable of doing more so Thursday yoga is not compromised.</div>':""}
 ${w.sections.map(s=>`<section class="card"><h3>${s.name}</h3>${s.exercises.map(e=>exerciseHTML(e,day,s.name)).join("")}</section>`).join("")}
 ${day==="Tuesday"?'<div class="note"><strong>Intensity:</strong> generally leave 1–3 good reps in reserve. No high-volume finisher during the winter phase.</div>':""}
 ${day==="Sunday"?'<div class="note"><strong>Pull-up progression:</strong> once all 3 sets reach 8 clean reps at the slow tempo, reduce machine assistance one increment and return to about 6 reps.</div>':""}`;
}
function todayView(){setTab("today");workoutView(todayName(),false)}
window.weekView=()=>{setTab("week");app.innerHTML=`<section class="hero"><div class="eyebrow">Winter Plan</div><h2>Weekly Schedule</h2><p>Tap any day to open its workout.</p></section><div class="day-grid">${["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d=>`<article class="day-card" onclick="workoutView('${d}')"><h3>${d}</h3><p>${workouts[d].title}</p><span class="badge">${workouts[d].purpose}</span></article>`).join("")}</div>`}
window.workoutView=workoutView;
tabs.forEach(b=>b.addEventListener("click",()=>({today:todayView,week:weekView}[b.dataset.view])()));
if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
todayView();
