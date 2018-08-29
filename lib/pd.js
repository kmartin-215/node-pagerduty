'use strict';

////////////////////////////////////////////////////////////////////////////
// Exported Functions
//
module.exports = Client;


////////////////////////////////////////////////////////////////////////////
// Required Modules
//
const req = require('request');
const querystring = require('querystring');


////////////////////////////////////////////////////////////////////////////
// Local Variables / Functions
//
const baseUrl = 'https://api.pagerduty.com/';
let myKey = null;

const request = (options => {
    return new Promise((resolve, reject) => {
        req(options, function(err, res){
            if(err) {
                return reject(err);
            }
            return resolve(res);
        })
    });
});

let options = (url, method, key, qs, body) =>{
    let includes = [];
    if (query.hasOwnProperty('include')) {
        var include = query.include;
        delete query['include'];
        for (var i = 0, len = include.length; i < len; i++) {
            includes.push(include[i]);
        }
    }
    qs = qs ? '?' + querystring.stringify(qs) : '';
    if (includes !== undefined && includes.length > 0) {
        qs = qs + '&includes[]=' + includes.join('&includes[]=');
    }
    let _option =  {
        uri: baseUrl + url + qs,
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Token token=' + key
        },
        timeout: 5000
    };
    if(/put|post|patch/i.test(method) && (body && typeof body === 'object')){
        _option.json = true;
        _option.body = body;
    }
    return _option;
};


////////////////////////////////////////////////////////////////////////////
// Constructor
//
function Client(apiKey) {
    myKey = apiKey;
}

////////////////////////////////////////////////////////////////////////////
// Prototypes
//

// Abilities
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Abilities
Client.prototype.abilities = {
    listAbilities: async() => {
        try {
            return await request(options('abilities', 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    testAbility: async(id) => {
        try {
            return await request(options('abilities/' + id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Add-Ons
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Add-ons
Client.prototype.addOns = {
    listAddOns: async(qs) => {
        try {
            return await request(options('addons', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    installAddOn: async(payload) => {
        try {
            return await request(options('addons', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteAddOn: async(id) => {
        try {
            return await request(options('addons/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getAddOn: async(id) => {
        try {
            return await request(options('addons/' + id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateAddOn: async(id, payload) => {
        try {
            return await request(options('addons/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Escalation Policies
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Escalation_Policies
Client.prototype.escalationPolicies = {
    listEscalationPolicies: async(qs) => {
        try {
            return await request(options('escalation_policies', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createEscalationPolicy: async(from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('escalation_policies', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteEscalationPolicy: async(id) => {
        try {
            return await request(options('escalation_policies/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getEscalationPolicy: async(id, qs) => {
        try {
            return await request(options('escalation_policies/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateEscalationPolicy: async(id, payload) => {
        try {
            return await request(options('escalation_policies/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Events
// https://v2.developer.pagerduty.com/docs/send-an-event-events-api-v2
Client.prototype.events = {
    sendEvent: async(payload) => {
        try {
            return await request({
                uri: 'https://events.pagerduty.com/v2/enqueue',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token token=' + myKey
                },
                timeout: 5000,
                json: true,
                body: payload
            });
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Incidents
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents
Client.prototype.incidents = {
    listIncidents: async(qs) =>{
        try {
            return await request(options('incidents', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createIncident: async(from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    manageIncident: async(from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents', 'PUT', myKey, null, payload), custHeaders));
        }
        catch(err){
            throw new Error(err)
        }
    },
    mergeIncidents: async(id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id + '/merge', 'PUT', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getIncident: async(id) => {
        try {
            return await request(options('incidents/' + id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateIncident: async(id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id, 'PUT', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err);
        }
    },
    listAlerts: async(id, qs) => {
        try {
            return await request(options('incidents/' + id + '/alerts', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    manageAlerts: async(id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id + '/alerts', 'PUT', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getAlert: async(id, alert_id) => {
        try {
            return await request(options('incidents/' + id + '/alerts/' + alert_id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateAlert: async(id, alert_id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id + '/alerts/' + alert_id, 'PUT', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listLogEntries: async(id, qs) => {
        try {
            return await request(options('incidents/' + id + '/log_entries', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listNotes: async(id) => {
        try {
            return await request(options('incidents/' + id + '/notes', 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createNote: async(id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id + '/notes', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err);
        }
    },
    snoozeIncident: async(id, from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('incidents/' + id + '/snooze', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err);
        }
    }
};

// Priorities
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Priorities
Client.prototype.priorities = {
    listPriorities: async() => {
        try {
            return await request(options('priorities', 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Log Entries
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Log_Entries
Client.prototype.logEntries = {
    listLogEntries: async(qs) =>{
        try {
            return await request(options('log_entries', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getLogEntry: async(id, qs) =>{
        try {
            return await request(options('log_entries/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Maintenance Windows
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Maintenance_Windows
Client.prototype.maintenanceWindows = {
    listMaintenanceWindows: async(qs) => {
        try {
            return await request(options('maintenance_windows', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createMaintenanceWindow: async(from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('maintenance_windows', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err);
        }
    },
    deleteMaintenanceWindow: async(id) => {
        try {
            return await request(options('maintenance_windows/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getMaintenanceWindow: async(id, qs) => {
        try {
            return await request(options('maintenance_windows/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateMaintenanceWindow: async(id, payload) => {
        try {
            return await request(options('maintenance_windows/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Notifications
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Notifications
Client.prototype.notifications = {
    listNotifications: async(qs) => {
        try {
            return await request(options('notifications', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// On-Calls
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/On-Calls
Client.prototype.onCalls = {
    listAllOnCalls: async(qs) => {
        try {
            return await request(options('oncalls', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Schedules
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules
Client.prototype.schedules = {
    listSchedule: async(qs) => {
        try {
            return await request(options('schedules', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createSchedule: async(qs, payload) => {
        try {
            return await request(options('schedules', 'POST', myKey, qs, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    previewSchedule: async(qs, payload) => {
        try {
            return await request(options('schedules/preview', 'POST', myKey, qs, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteSchedule: async(id) => {
        try {
            return await request(options('schedules/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getSchedule: async(id, qs) => {
        try {
            return await request(options('schedules/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateSchedule: async(id, qs, payload) => {
        try {
            return await request(options('schedules/' + id, 'PUT', myKey, qs, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listOverrides: async(id, qs) => {
        try {
            return await request(options('schedules/' + id + '/overrides', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createOverride: async(id, payload) => {
        try {
            return await request(options('schedules/' + id + '/overrides', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteOverride: async(id, override_id) => {
        try {
            return await request(options('schedules/' + id + '/overrides/' + override_id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listUsersOnCall: async(id, qs) => {
        try {
            return await request(options('schedules/' + id + '/users', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Services
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services
Client.prototype.services = {
    listServices: async(qs) => {
        try {
            return await request(options('services', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createService: async(payload) => {
        try {
            return await request(options('services', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteService: async(id) => {
        try {
            return await request(options('services/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getService: async(id, qs) => {
        try {
            return await request(options('services/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateService: async(id, payload) => {
        try {
            return await request(options('services/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createIntegration: async(id, payload) => {
        try {
            return await request(options('services/' + id + '/integrations', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    viewIntegration: async(id, integration_id) => {
        try {
            return await request(options('services/' + id + '/integrations/' + integration_id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateIntegration: async(id, integration_id, payload) => {
        try {
            return await request(options('services/' + id + '/integrations/' + integration_id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Teams
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Teams
Client.prototype.teams = {
    listTeams: async(qs) => {
        try {
            return await request(options('teams', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createTeam: async(payload) => {
        try {
            return await request(options('teams', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteTeam: async(id) => {
        try {
            return await request(options('teams/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getTeam: async(id) => {
        try {
            return await request(options('teams/' + id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateTeam: async(id, payload) => {
        try {
            return await request(options('teams/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    removeEscalationPolicy: async(id, policy_id) => {
        try {
            return await request(options('teams/' + id + '/escalation_policies/' + policy_id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    addEscalationPolicy: async(id, policy_id) => {
        try {
            return await request(options('teams/' + id + '/escalation_policies/' + policy_id, 'PUT', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    removeUser: async(id, user_id) => {
        try {
            return await request(options('teams/' + id + '/users/' + user_id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    addUser: async(id, user_id) => {
        try {
            return await request(options('teams/' + id + '/users/' + user_id, 'PUT', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Users
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users
Client.prototype.users = {
    listUsers: async(qs) => {
        try {
            return await request(options('users', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createUser: async(from, payload) => {
        try {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            return await request(Object.assign(options('users', 'POST', myKey, null, payload), custHeaders))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteUser: async(id) => {
        try {
            return await request(options('users/' + id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getUser: async(id, qs) => {
        try {
            return await request(options('users/' + id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateUser: async(id, payload) => {
        try {
            return await request(options('users/' + id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listContactMethods: async(id) => {
        try {
            return await request(options('users/' + id + '/contact_methods', 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createContactMethod: async(id, payload) => {
        try {
            return await request(options('users/' + id + '/contact_methods', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteContactMethod: async(id, contact_method_id) => {
        try {
            return await request(options('users/' + id + '/contact_methods/' + contact_method_id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getContactMethod: async(id, contact_method_id) => {
        try {
            return await request(options('users/' + id + '/contact_methods/' + contact_method_id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateContactMethod: async(id, contact_method_id, payload) => {
        try {
            return await request(options('users/' + id + '/contact_methods/' + contact_method_id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    listNotificationRules: async(id, qs) => {
        try {
            return await request(options('users/' + id + '/notification_rules', 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    createNotificationRule: async(id, payload) => {
        try {
            return await request(options('users/' + id + '/notification_rules', 'POST', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    },
    deleteNotificationRule: async(id, rule_id) => {
        try {
            return await request(options('users/' + id + '/notification_rules/' + rule_id, 'DELETE', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getNotificationRule: async(id, rule_id, qs) => {
        try {
            return await request(options('users/' + id + '/notification_rules/' + rule_id, 'GET', myKey, qs, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    updateNotificationRule: async(id, rule_id, payload) => {
        try {
            return await request(options('users/' + id + '/notification_rules/' + rule_id, 'PUT', myKey, null, payload))
        }
        catch(err){
            throw new Error(err)
        }
    }
};

// Vendors
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Vendors
Client.prototype.vendors = {
    listVendors: async() => {
        try {
            return await request(options('vendors', 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    },
    getVendor: async(id) => {
        try {
            return await request(options('vendors/' + id, 'GET', myKey, null, null))
        }
        catch(err){
            throw new Error(err)
        }
    }
};