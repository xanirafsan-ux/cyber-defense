const events = [
  {time:'09:41',user:'rahim',ip:'185.20.10.44',country:'Unknown',device:'new',outcome:'Failed',risk:'high',signal:'Repeated attempt'},
  {time:'09:43',user:'rahim',ip:'45.116.20.11',country:'Dhaka',device:'known',outcome:'Failed',risk:'medium',signal:'Password failure'},
  {time:'09:45',user:'rahim',ip:'103.92.10.8',country:'Singapore',device:'new',outcome:'Failed',risk:'high',signal:'Geo anomaly'},
  {time:'09:47',user:'rahim',ip:'103.92.10.8',country:'Singapore',device:'new',outcome:'Success',risk:'high',signal:'Success after failures'},
  {time:'09:49',user:'sadia',ip:'45.116.20.11',country:'Dhaka',device:'known',outcome:'Success',risk:'low',signal:'Normal pattern'},
  {time:'10:12',user:'karim',ip:'45.116.20.11',country:'Dhaka',device:'known',outcome:'Failed',risk:'low',signal:'Single failure'}
];
const $ = id => document.getElementById(id);
function visibleEvents(){
  const q = $('search').value.trim().toLowerCase(), risk = $('risk').value, outcome = $('outcome').value;
  return events.filter(e => (!q || `${e.user} ${e.ip} ${e.country} ${e.signal}`.toLowerCase().includes(q)) && (risk==='all'||e.risk===risk) && (outcome==='all'||e.outcome.toLowerCase()===outcome));
}
function render(){
  $('rows').innerHTML = visibleEvents().map(e => `<tr><td>${e.time}</td><td>${e.user}</td><td>${e.ip}</td><td>${e.country}</td><td>${e.device}</td><td>${e.outcome}</td><td class="${e.risk}">${e.signal}</td></tr>`).join('') || '<tr><td colspan="7">No matching events.</td></tr>';
}
function analyze(){
  const list=visibleEvents(), high=list.filter(e=>e.risk==='high').length, failed=list.filter(e=>e.outcome==='Failed').length, success=list.filter(e=>e.outcome==='Success').length;
  const attention = high || (failed>=3 && success) ? 'HIGH ATTENTION' : failed>=2 ? 'REVIEW' : 'LOW';
  $('analysis').innerHTML=`<b class="${attention==='HIGH ATTENTION'?'high':attention==='REVIEW'?'medium':'low'}">Initial assessment: ${attention}</b><br>${list.length} events shown; ${failed} failed and ${success} successful. ${high ? 'High-risk signals include a new device, geographic anomaly, and a success after failures.' : 'No high-risk signal is visible in the current view.'} This is a triage hypothesis, not proof. Validate context, preserve evidence, and escalate according to the playbook.`;
}
function assessPhish(){
  const found=[...document.querySelectorAll('.phish:checked')];
  $('phishResult').innerHTML=found.length ? `<b class="high">Suspicious email: ${found.length} indicator(s) found.</b><br>Do not click, reply, or open attachments. Preserve the original message and headers; report through the approved channel; search for other recipients; and quarantine or block only through an authorized process.` : 'No indicators selected. Still verify sender, links, attachments, headers, and user context before releasing the message.';
}
['search','risk','outcome'].forEach(id=>$(id).addEventListener(id==='search'?'input':'change',render));
$('analyze').addEventListener('click',analyze); $('assess').addEventListener('click',assessPhish); render();
$('report').textContent=`INCIDENT REPORT / CASE-001\n\nTitle: Possible account takeover\nInitial severity: High attention / pending validation\nStatus: Open — escalated for L2 review\n\nEvidence:\n- Five failed logins in a short window\n- Multiple source locations\n- New device fingerprint\n- Successful login after failures\n- High-value transaction attempt\n\nActions:\n1. Validate identity, IP, device, and transaction history\n2. Preserve authentication and transaction logs\n3. Escalate to L2 Security and Fraud within SLA\n4. Apply authorized account-protection playbook\n5. Record owner, timestamps, and closure criteria\n\nNote: Synthetic case study created for learning.`;
