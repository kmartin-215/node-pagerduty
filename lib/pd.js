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
    qs = qs ? '?' + querystring.stringify(qs) : '';
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
    listAbilities: () => {
        return new Promise((resolve, reject) =>{
            request(options('abilities', 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    testAbility: (id) => {
        return new Promise((resolve, reject) =>{
            request(options('abilities/' + id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Add-Ons
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Add-ons
Client.prototype.addOns = {
    listAddOns: (qs) => {
        return new Promise((resolve, reject) =>{
            request(options('addons', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    installAddOn: (payload) => {
        return new Promise((resolve, reject) =>{
            request(options('addons', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteAddOn: (id) => {
        return new Promise((resolve, reject) =>{
            request(options('addons/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getAddOn: (id) => {
        return new Promise((resolve, reject) =>{
            request(options('addons/' + id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateAddOn: (id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('addons/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Escalation Policies
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Escalation_Policies
Client.prototype.escalationPolicies = {
    listEscalationPolicies: (qs) => {
        return new Promise((resolve, reject) =>{
            request(options('escalation_policies', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createEscalationPolicy: (from, payload) => {
        return new Promise((resolve, reject) =>{
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('escalation_policies', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteEscalationPolicy: (id) => {
        return new Promise((resolve, reject) =>{
            request(options('escalation_policies/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getEscalationPolicy: (id, qs) => {
        return new Promise((resolve, reject) =>{
            request(options('escalation_policies/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateEscalationPolicy: (id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('escalation_policies/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Events
// https://v2.developer.pagerduty.com/docs/send-an-event-events-api-v2
Client.prototype.events = {
    sendEvent: (payload) => {
        return new Promise((resolve, reject) =>{
            request({
                uri: 'https://events.pagerduty.com/v2/enqueue',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token token=' + myKey
                },
                timeout: 5000,
                json: true,
                body: payload
            })
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Incidents
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents
Client.prototype.incidents = {
    listIncidents: (qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('incidents', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createIncident: (from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    manageIncident: (from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents', 'PUT', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    mergeIncidents: (id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id + '/merge', 'PUT', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getIncident: (id) => {
        return new Promise((resolve, reject) => {
            request(options('incidents/' + id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateIncident: (id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id, 'PUT', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listAlerts: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('incidents/' + id + '/alerts', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    manageAlerts: (id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id + '/alerts', 'PUT', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getAlert: (id, alert_id) => {
        return new Promise((resolve, reject) => {
            request(options('incidents/' + id + '/alerts/' + alert_id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateAlert: (id, alert_id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id + '/alerts/' + alert_id, 'PUT', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listLogEntries: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('incidents/' + id + '/log_entries', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listNotes: (id) => {
        return new Promise((resolve, reject) => {
            request(options('incidents/' + id + '/notes', 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createNote: (id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id + '/notes', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    snoozeIncident: (id, from, payload) => {
        return new Promise((resolve, reject) => {
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('incidents/' + id + '/snooze', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Priorities
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Priorities
Client.prototype.priorities = {
    listPriorities: () => {
        return new Promise((resolve, reject) =>{
            request(options('priorities', 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Log Entries
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Log_Entries
Client.prototype.logEntries = {
    listLogEntries: (qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('log_entries', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getLogEntry: (id, qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('log_entries/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Maintenance Windows
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Maintenance_Windows
Client.prototype.maintenanceWindows = {
    listMaintenanceWindows: (qs) => {
        return new Promise((resolve, reject) =>{
            request(options('maintenance_windows', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createMaintenanceWindow: (from, payload) => {
        return new Promise((resolve, reject) =>{
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('maintenance_windows', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteMaintenanceWindow: (id) => {
        return new Promise((resolve, reject) =>{
            request(options('maintenance_windows/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getMaintenanceWindow: (id, qs) => {
        return new Promise((resolve, reject) =>{
            request(options('maintenance_windows/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateMaintenanceWindow: (id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('maintenance_windows/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Notifications
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Notifications
Client.prototype.notifications = {
    listNotifications: (qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('notifications', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// On-Calls
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/On-Calls
Client.prototype.onCalls = {
    listAllOnCalls: (qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('oncalls', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Schedules
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules
Client.prototype.schedules = {
    listSchedule: (qs) => {
        return new Promise((resolve, reject) => {
            request(options('schedules', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createSchedule: (qs, payload) => {
        return new Promise((resolve, reject) => {
            request(options('schedules', 'POST', myKey, qs, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    previewSchedule: (qs, payload) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/preview', 'POST', myKey, qs, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteSchedule: (id) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getSchedule: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateSchedule: (id, qs, payload) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id, 'PUT', myKey, qs, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listOverrides: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id + '/overrides', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createOverride: (id, payload) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id + '/overrides', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteOverride: (id, override_id) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id + '/overrides/' + override_id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listUsersOnCall: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('schedules/' + id + '/users', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Services
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services
Client.prototype.services = {
    listServices: (qs) => {
        return new Promise((resolve, reject) => {
            request(options('services', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createService: (payload) => {
        return new Promise((resolve, reject) => {
            request(options('services', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteService: (id) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getService: (id, qs) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateService: (id, payload) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createIntegration: (id, payload) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id + '/integrations', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    viewIntegration: (id, integration_id) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id + '/integrations/' + integration_id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateIntegration: (id, integration_id, payload) => {
        return new Promise((resolve, reject) => {
            request(options('services/' + id + '/integrations/' + integration_id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Teams
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Teams
Client.prototype.teams = {
    listTeams: (qs) => {
        return new Promise((resolve, reject) => {
            request(options('teams', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createTeam: (payload) => {
        return new Promise((resolve, reject) => {
            request(options('teams', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteTeam: (id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getTeam: (id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateTeam: (id, payload) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    removeEscalationPolicy: (id, policy_id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id + '/escalation_policies/' + policy_id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    addEscalationPolicy: (id, policy_id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id + '/escalation_policies/' + policy_id, 'PUT', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    removeUser: (id, user_id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id + '/users/' + user_id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    addUser: (id, user_id) => {
        return new Promise((resolve, reject) => {
            request(options('teams/' + id + '/users/' + user_id, 'PUT', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Users
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users
Client.prototype.users = {
    listUsers: (qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('users', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createUser: (from, payload) =>{
        return new Promise((resolve, reject) =>{
            let custHeaders = {
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/vnd.pagerduty+json;version=2",
                    'Authorization': 'Token token=' + myKey,
                    'From': from
                }
            };
            request(Object.assign(options('users', 'POST', myKey, null, payload), custHeaders))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteUser: (id) =>{
        return new Promise((resolve, reject) =>{
            request(options('users/' + id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getUser: (id, qs) =>{
        return new Promise((resolve, reject) =>{
            request(options('users/' + id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateUser: (id, payload) =>{
        return new Promise((resolve, reject) =>{
            request(options('users/' + id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listContactMethods: (id) =>{
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/contact_methods', 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createContactMethod: (id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/contact_methods', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteContactMethod: (id, contact_method_id) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/contact_methods/' + contact_method_id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getContactMethod: (id, contact_method_id) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/contact_methods/' + contact_method_id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updateContactMethod: (id, contact_method_id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/contact_methods/' + contact_method_id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    listNotificationRules: (id, qs) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/notification_rules', 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    createNotificationRule: (id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/notification_rules', 'POST', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    deleteNotificationRule: (id, rule_id) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/notification_rules/' + rule_id, 'DELETE', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getNotificationRule: (id, rule_id, qs) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/notification_rules/' + rule_id, 'GET', myKey, qs, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    updatetNotificationRule: (id, rule_id, payload) => {
        return new Promise((resolve, reject) =>{
            request(options('users/' + id + '/notification_rules/' + rule_id, 'PUT', myKey, null, payload))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};

// Vendors
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Vendors
Client.prototype.vendors = {
    listVendors: () =>{
        return new Promise((resolve, reject) =>{
            request(options('vendors', 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    },
    getVendor: (id) =>{
        return new Promise((resolve, reject) =>{
            request(options('vendors/' + id, 'GET', myKey, null, null))
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                });
        });
    }
};