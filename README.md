# node-pagerduty
PagerDuty API Wrapper for Node.js

## Installation

```
npm install --save node-pagerduty
```

The `--save` tells NPM to automatically add it to your `package.json` file

## Usage

```
// Import a module
const pdClient = require('node-pagerduty');

const pdApiKey = 'yourApiKeyGoesHere';
const pd = new pdClient(pdApiKey);

let yourId = 'yourScheduleIdGoesHere';
let yourQs = {
   time_zone: 'UTC',
   since: 'yourSince',
   until: 'yourUntil'
};

// Using it to get things done

pd.schedules.getSchedule(yourId, yourQs)
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.log(err);
   });

// Following example contains the use of expected array parameters

let arrayQs = {
	time_zone: 'UTC'
	user_ids: ['AAABBB', 'XXXYYY']
};

pd.onCalls.listAllOnCalls(arrayQs)
   .then(res => {
      console.log(res);
   })
   .catch(err => {
      console.log(err);
   });
```

## Methods
All methods follow the [official API documentation](https://v2.developer.pagerduty.com/).

This is a promise based library: `(fullfilled, rejected)`

### Abilities
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Abilities
```
abilities.listAbilities()
abilities.testAbility(id)
```

### Add-Ons
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Add-ons
```
addOns.listAddOns(qs)
addOns.installAddOn(payload)
addOns.deleteAddOn(id)
addOns.getAddOn(id)
addOns.updateAddOn(id, payload)
```

### Escalation Policies
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Escalation_Policies
```
escalationPolicies.listEscalationPolicies(qs)
escalationPolicies.createEscalationPolicy(from, payload)
escalationPolicies.deleteEscalationPolicy(id)
escalationPolicies.getEscalationPolicy(id, qs)
escalationPolicies.updateEscalationPolicy(id, payload)
```

### Events
https://v2.developer.pagerduty.com/docs/send-an-event-events-api-v2
```
events.sendEvent(payload)
```

### Incidents
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents
```
incidents.listIncidents(qs)
incidents.createIncident(from, payload)
incidents.manageIncident(from, payload)
incidents.mergeIncidents(id, from, payload)
incidents.getIncident(id)
incidents.updateIncident(id, from, payload)
incidents.listAlerts(id, qs)
incidents.manageAlerts(id, from, payload)
incidents.getAlert(id, alert_id)
incidents.updateAlert(id, alert_id, from, payload)
incidents.listLogEntries(id, qs)
incidents.listNotes(id)
incidents.createNote(id, from, payload)
incidents.snoozeIncident(id, from, payload)
```

### Priorities
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Priorities
```
priorities.listPriorities()
```

### Log Entries
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Log_Entries
```
logEntries.listLogEntries(qs)
logEntries.getLogEntry(id, qs)
```

### Maintenance Windows
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Maintenance_Windows
```
maintenanceWindows.listMaintenanceWindows(qs)
maintenanceWindows.createMaintenanceWindow(from, payload)
maintenanceWindows.deleteMaintenanceWindow(id)
maintenanceWindows.getMaintenanceWindow(id, qs)
maintenanceWindows.updateMaintenanceWindow(id, payload)
```

### Notifications
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Notifications
```
notifications.listNotifications(qs)
```

### On-Calls
https://v2.developer.pagerduty.com/v2/page/api-reference#!/On-Calls
```
onCalls.listAllOnCalls(qs)
```

### Schedules
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules
```
schedules.listSchedule(qs)
schedules.createSchedule(payload)
schedules.previewSchedule(qs, payload)
schedules.deleteSchedule(id)
schedules.getSchedule(id, qs)
schedules.updateSchedule(id, qs, payload)
schedules.listOverrides(id, qs)
schedules.createOverride(id, payload)
schedules.deleteOverride(id, override_id)
schedules.listUsersOnCall(id, qs)
```

### Services
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services
```
services.listServices(qs)
services.createService(payload)
services.deleteService(id)
services.getService(id, qs)
services.updateService(id, payload)
services.createIntegration(id, payload)
services.viewIntegration(id, integration_id)
services.updateIntegration(id, integration_id, payload)
```

### Teams
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Teams
```
teams.listTeams(qs)
teams.createTeam(payload)
teams.deleteTeam(id)
teams.getTeam(id)
teams.updateTeam(id, payload)
teams.removeEscalationPolicy(id, policy_id)
teams.addEscalationPolicy(id, policy_id)
teams.removeUser(id, user_id)
teams.addUser(id, user_id)
```

### Users
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users
```
users.listUsers(qs)
users.createUser(from, payload)
users.deleteUser(id)
users.getUser(id, qs)
users.updateUser(id, payload)
users.listContactMethods(id)
users.createContactMethod(id, payload)
users.deleteContactMethod(id, contact_method_id)
users.getContactMethod(id, contact_method_id)
users.updateContactMethod(id, contact_method_id, payload)
users.listNotificationRules(id, qs)
users.createNotificationRule(id, payload)
users.deleteNotificationRule(id, rule_id)
users.getNotificationRule(id, rule_id, qs)
users.updateNotificationRule(id, rule_id, payload)
```

### Vendors
https://v2.developer.pagerduty.com/v2/page/api-reference#!/Vendors
```
vendors.listVendors()
vendors.getVendor(id)
```

## License
MIT license. See the LICENSE file for details.
