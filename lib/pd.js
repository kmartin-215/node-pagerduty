'use strict';

////////////////////////////////////////////////////////////////////////////
// Exported Functions
//
module.exports = Client;


////////////////////////////////////////////////////////////////////////////
// Required Modules
//
const request       = require('request-promise-native');
const querystring   = require('query-string');
const merge         = require('deepmerge');
const pjson         = require('../package.json');


////////////////////////////////////////////////////////////////////////////
// Local Variables / Functions
//
const baseUrl = 'https://api.pagerduty.com/';
const libVersion =  `node-pagerduty / ${pjson.version}`;

////////////////////////////////////////////////////////////////////////////
// Constructor
//
function Client(apiToken, tokenType, options) {
    this.apiToken = apiToken;
    this.tokenType = tokenType || 'token';
    
    // tokens generated manually through the PagerDuty UI
    let authString = `Token token=${this.apiToken}`;
    if (this.tokenType.toLowerCase() === 'bearer') {
        // bearer tokens generated through PagerDuty OAuth flow
        authString = `Bearer ${this.apiToken}`;
    }
    const acceptHeader = 'application/vnd.pagerduty+json;version=2';

    this.options = (url, method, qs, body) =>{
        qs = qs ? '?' + querystring.stringify(qs, {arrayFormat: 'bracket'}) : '';
        let _option =  {
            uri: baseUrl + url + qs,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': libVersion,
                'Accept': acceptHeader,
                'Authorization': authString
            },
            timeout: 5000,
            resolveWithFullResponse: true
        };
        if(/put|post|patch/i.test(method) && (body && typeof body === 'object')){
            _option.json = true;
            _option.body = body;
        }

        if(options){
            _option = merge(_option, options)
        }

        return _option;
    };


////////////////////////////////////////////////////////////////////////////
// Prototypes
//

// Abilities
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Abilities
    this.abilities = {
        listAbilities: async () => {
            try {
                return await request(this.options('abilities', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        testAbility: async (id) => {
            try {
                return await request(this.options('abilities/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Add-Ons
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Add-ons
    this.addOns = {
        listAddOns: async (qs) => {
            try {
                return await request(this.options('addons', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        installAddOn: async (payload) => {
            try {
                return await request(this.options('addons', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteAddOn: async (id) => {
            try {
                return await request(this.options('addons/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getAddOn: async (id) => {
            try {
                return await request(this.options('addons/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateAddOn: async (id, payload) => {
            try {
                return await request(this.options('addons/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Analytics
// https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1analytics~1raw~1incidents~1%7Bid%7D/get
    this.analytics = {
        getIncidentData: async (id) => {
            try {
                return await request(this.options('analytics/raw/incidents/'+ id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getIncidentsData: async () => {
            try {
                return await request(this.options('analytics/raw/incidents', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
    }

// Business Services
// https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1business_services/get
    this.businessServices = {
        listBusinessServices: async (qs) => {
            try {
                return await request(this.options('business_services', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createBusinessService: async (payload) => {
            try {
                return await request(this.options('business_services', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteBusinessService: async (id) => {
            try {
                return await request(this.options('business_services/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getBusinessService: async (id) => {
            try {
                return await request(this.options('business_services/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateBusinessService: async (id, payload) => {
            try {
                return await request(this.options('business_services' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Contextual Search
// https://api-reference.pagerduty.com/#!/Contextual_Search
    this.contextualSearch = {
        listTags: async (qs) => {
            try {
                return await request(this.options('tags', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createTag: async (payload) => {
            try {
                return await request(this.options('tags', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteTag: async (id) => {
            try {
                return await request(this.options(`tags/${id}`, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getTag: async (id) => {
            try {
                return await request(this.options(`tags/${id}`, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getConnectedEntities: async (id, entity_type) => {
            try {
                return await request(this.options(`tags/${id}/${entity_type}`, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        assignTags: async (entity_type, id, payload) => {
            try {
                return await request(this.options(`${entity_type}/${id}/change_tags`, 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Escalation Policies
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Escalation_Policies
    this.escalationPolicies = {
        listEscalationPolicies: async (qs) => {
            try {
                return await request(this.options('escalation_policies', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createEscalationPolicy: async (from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('escalation_policies', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteEscalationPolicy: async (id) => {
            try {
                return await request(this.options('escalation_policies/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getEscalationPolicy: async (id, qs) => {
            try {
                return await request(this.options('escalation_policies/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateEscalationPolicy: async (id, payload) => {
            try {
                return await request(this.options('escalation_policies/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };
// Event Rules
// https://v2.developer.pagerduty.com/docs/global-event-rules-api
    this.eventRules = {
        listEventRules: async () => {
            try {
                return await request(this.options('event_rules', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }           
        },
        createEventRule: async (payload) => {
            try {
                return await request(this.options('event_rules', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateEventRule: async (id, payload) => {
            try {
                return await request(this.options('event_rules/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteEventRule: async (id) => {
            try {
                return await request(this.options('event_rules/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
    };
// Extension Schemas
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Extension_Schemas
    this.extensionSchemas = {
        listExtensionSchemas: async () => {
            try {
                return await request(this.options('extension_schemas', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getExtensionVendor: async (id) => {
            try {
                return await request(this.options('extension_schemas/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Extensions
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Extensions
    this.extensions = {
        listExtensions: async (qs) => {
            try {
                return await request(this.options('extensions', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createExtension: async (payload) => {
            try {
                return await request(this.options('extensions', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteExtension: async (id) => {
            try {
                return await request(this.options('extensions/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getExtension: async (id, qs) => {
            try {
                return await request(this.options('extensions/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateExtension: async (id, payload) => {
            try {
                return await request(this.options('extensions/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Events
// https://v2.developer.pagerduty.com/docs/send-an-event-events-api-v2
    this.events = {
        sendEvent: async (payload) => {
            try {
                return await request({
                    uri: 'https://events.pagerduty.com/v2/enqueue',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        'Authorization': authString
                    },
                    timeout: 5000,
                    json: true,
                    body: payload
                });
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Incidents
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Incidents
    this.incidents = {
        listIncidents: async (qs) => {
            try {
                return await request(this.options('incidents', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createIncident: async (from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        manageIncident: async (from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents', 'PUT', null, payload), custHeaders));
            }
            catch (err) {
                throw new Error(err)
            }
        },
        mergeIncidents: async (id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id + '/merge', 'PUT', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getIncident: async (id) => {
            try {
                return await request(this.options('incidents/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateIncident: async (id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id, 'PUT', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        },
        listAlerts: async (id, qs) => {
            try {
                return await request(this.options('incidents/' + id + '/alerts', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        manageAlerts: async (id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id + '/alerts', 'PUT', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getAlert: async (id, alert_id) => {
            try {
                return await request(this.options('incidents/' + id + '/alerts/' + alert_id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateAlert: async (id, alert_id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id + '/alerts/' + alert_id, 'PUT', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listLogEntries: async (id, qs) => {
            try {
                return await request(this.options('incidents/' + id + '/log_entries', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listNotes: async (id) => {
            try {
                return await request(this.options('incidents/' + id + '/notes', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createNote: async (id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id + '/notes', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        },
        createStatusUpdate: async(id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options(`incidents/${id}/status_updates`, 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        },
        createResponderRequest: async(id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options(`incidents/${id}/responder_requests`, 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        },
        snoozeIncident: async (id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('incidents/' + id + '/snooze', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        }
    };

// Priorities
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Priorities
    this.priorities = {
        listPriorities: async () => {
            try {
                return await request(this.options('priorities', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Response Plays
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Response_Plays
    this.responsePlays = {
        createResponseReplay: async(payload) => {
            try {
                return await request(this.options('response_plays', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteResponseReplay: async(id) => {
            try {
                return await request(this.options(`response_plays/${id}`, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getResponseReplay: async(id) => {
            try {
                return await request(this.options(`response_plays/${id}`, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listResponseReplay: async(qs) => {
            try {
                return await request(this.options(`response_plays`, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        runResponsePlay: async(id, from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('response_plays/' + id + '/run', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateResponseReplay: async(id, payload) => {
            try {
                return await request(this.options(`response_plays/${id}`, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
    };

// Log Entries
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Log_Entries
    this.logEntries = {
        listLogEntries: async (qs) => {
            try {
                return await request(this.options('log_entries', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getLogEntry: async (id, qs) => {
            try {
                return await request(this.options('log_entries/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Maintenance Windows
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Maintenance_Windows
    this.maintenanceWindows = {
        listMaintenanceWindows: async (qs) => {
            try {
                return await request(this.options('maintenance_windows', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createMaintenanceWindow: async (from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('maintenance_windows', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err);
            }
        },
        deleteMaintenanceWindow: async (id) => {
            try {
                return await request(this.options('maintenance_windows/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getMaintenanceWindow: async (id, qs) => {
            try {
                return await request(this.options('maintenance_windows/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateMaintenanceWindow: async (id, payload) => {
            try {
                return await request(this.options('maintenance_windows/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Notifications
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Notifications
    this.notifications = {
        listNotifications: async (qs) => {
            try {
                return await request(this.options('notifications', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// On-Calls
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/On-Calls
    this.onCalls = {
        listAllOnCalls: async (qs) => {
            try {
                return await request(this.options('oncalls', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Rulesets
// https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1rulesets/get
    this.rulesets = {
        listRulesets: async (qs) => {
            try {
                return await request(this.options('rulesets', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getRuleset: async (id) => {
            try {
                return await request(this.options('rulesets/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createRuleset: async (payload) => {
            try {
                return await request(this.options('rulesets', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateRuleset: async (id, payload) => {
            try {
                return await request(this.options('rulesets/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteRuleset: async (id) => {
            try {
                return await request(this.options('rulesets/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },        
        listRulesetRules: async (id, qs) => {
            try {
                return await request(this.options('rulesets/' + id + '/rules', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },        
        createRulesetRule: async (id, payload) => {
            try {
                return await request(this.options('rulesets/' + id + '/rules', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },        
        getRulesetRule: async (rulesetId, ruleId) => {
            try {
                return await request(this.options('rulesets/' + rulesetId + '/rules/' + ruleId, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },        
        deleteRulesetRule: async (rulesetId, ruleId) => {
            try {
                return await request(this.options('rulesets/' + rulesetId + '/rules/' + ruleId, 'DELETE', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },        
        updateRulesetRule: async (rulesetId, ruleId, payload) => {
            try {
                return await request(this.options('rulesets/' + rulesetId + '/rules/' + ruleId, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
    };


// Schedules
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Schedules
    this.schedules = {
        listSchedule: async (qs) => {
            try {
                return await request(this.options('schedules', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createSchedule: async (qs, payload) => {
            try {
                return await request(this.options('schedules', 'POST', qs, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        previewSchedule: async (qs, payload) => {
            try {
                return await request(this.options('schedules/preview', 'POST', qs, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteSchedule: async (id) => {
            try {
                return await request(this.options('schedules/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getSchedule: async (id, qs) => {
            try {
                return await request(this.options('schedules/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateSchedule: async (id, qs, payload) => {
            try {
                return await request(this.options('schedules/' + id, 'PUT', qs, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listOverrides: async (id, qs) => {
            try {
                return await request(this.options('schedules/' + id + '/overrides', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createOverride: async (id, payload) => {
            try {
                return await request(this.options('schedules/' + id + '/overrides', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteOverride: async (id, override_id) => {
            try {
                return await request(this.options('schedules/' + id + '/overrides/' + override_id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listUsersOnCall: async (id, qs) => {
            try {
                return await request(this.options('schedules/' + id + '/users', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Service Dependencies
// https://developer.pagerduty.com/api-reference/reference/REST/openapiv3.json/paths/~1service_dependencies~1associate/post
this.serviceDependencies = {
    associateDependencies: async(payload) => {
        try {
            return await request(this.options('service_dependencies/associate', 'POST', null, payload))
        }
        catch (err) {
            throw new Error(err)
        }  
    },    
    disassociateDependencies: async(payload) => {
        try {
            return await request(this.options('service_dependencies/disassociate', 'POST', null, payload))
        }
        catch (err) {
            throw new Error(err)
        }  
    },    
    getBusinessServiceDependencies: async(id) => {
        try {
            return await request(this.options('service_dependencies/business_services/'+ id, 'GET', null, null))
        }
        catch (err) {
            throw new Error(err)
        }  
    },    
    getTechnicalServiceDependencies: async(id) => {
        try {
            return await request(this.options('service_dependencies/technical_services/'+ id, 'GET', null, null))
        }
        catch (err) {
            throw new Error(err)
        }  
    }
};


// Services
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Services
    this.services = {
        listServices: async (qs) => {
            try {
                return await request(this.options('services', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createService: async (payload) => {
            try {
                return await request(this.options('services', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteService: async (id) => {
            try {
                return await request(this.options('services/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getService: async (id, qs) => {
            try {
                return await request(this.options('services/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateService: async (id, payload) => {
            try {
                return await request(this.options('services/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createIntegration: async (id, payload) => {
            try {
                return await request(this.options('services/' + id + '/integrations', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        viewIntegration: async (id, integration_id) => {
            try {
                return await request(this.options('services/' + id + '/integrations/' + integration_id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateIntegration: async (id, integration_id, payload) => {
            try {
                return await request(this.options('services/' + id + '/integrations/' + integration_id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Teams
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Teams
    this.teams = {
        listTeams: async (qs) => {
            try {
                return await request(this.options('teams', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createTeam: async (payload) => {
            try {
                return await request(this.options('teams', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteTeam: async (id, qs) => {
            try {
                return await request(this.options('teams/' + id, 'DELETE', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getTeam: async (id, qs) => {
            try {
                return await request(this.options('teams/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateTeam: async (id, payload) => {
            try {
                return await request(this.options('teams/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getTeamMembers: async(id, qs) => {
            try {
                return await request(this.options(`teams/${id}/members`, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        removeEscalationPolicy: async (id, policy_id) => {
            try {
                return await request(this.options('teams/' + id + '/escalation_policies/' + policy_id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        addEscalationPolicy: async (id, policy_id) => {
            try {
                return await request(this.options('teams/' + id + '/escalation_policies/' + policy_id, 'PUT', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        removeUser: async (id, user_id) => {
            try {
                return await request(this.options('teams/' + id + '/users/' + user_id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        addUser: async (id, user_id, payload) => {
            try {
                return await request(this.options('teams/' + id + '/users/' + user_id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };

// Users
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Users
    this.users = {
        listUsers: async (qs) => {
            try {
                return await request(this.options('users', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createUser: async (from, payload) => {
            try {
                let custHeaders = {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': libVersion,
                        "Accept": acceptHeader,
                        'Authorization': authString,
                        'From': from
                    }
                };
                return await request(Object.assign(this.options('users', 'POST', null, payload), custHeaders))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteUser: async (id) => {
            try {
                return await request(this.options('users/' + id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getUser: async (id, qs) => {
            try {
                return await request(this.options('users/' + id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateUser: async (id, payload) => {
            try {
                return await request(this.options('users/' + id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getCurrentUser: async (qs) => {
            try {
                return await request(this.options('users/me', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listContactMethods: async (id) => {
            try {
                return await request(this.options('users/' + id + '/contact_methods', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createContactMethod: async (id, payload) => {
            try {
                return await request(this.options('users/' + id + '/contact_methods', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteContactMethod: async (id, contact_method_id) => {
            try {
                return await request(this.options('users/' + id + '/contact_methods/' + contact_method_id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getContactMethod: async (id, contact_method_id) => {
            try {
                return await request(this.options('users/' + id + '/contact_methods/' + contact_method_id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateContactMethod: async (id, contact_method_id, payload) => {
            try {
                return await request(this.options('users/' + id + '/contact_methods/' + contact_method_id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listNotificationRules: async (id, qs) => {
            try {
                return await request(this.options('users/' + id + '/notification_rules', 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        createNotificationRule: async (id, payload) => {
            try {
                return await request(this.options('users/' + id + '/notification_rules', 'POST', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteNotificationRule: async (id, rule_id) => {
            try {
                return await request(this.options('users/' + id + '/notification_rules/' + rule_id, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getNotificationRule: async (id, rule_id, qs) => {
            try {
                return await request(this.options('users/' + id + '/notification_rules/' + rule_id, 'GET', qs, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        updateNotificationRule: async (id, rule_id, payload) => {
            try {
                return await request(this.options('users/' + id + '/notification_rules/' + rule_id, 'PUT', null, payload))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteAllUserSessions: async (id) => {
            try {
                return await request(this.options(`users/${id}/sessions`, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        listUserActiveSessions: async (id) => {
            try {
                return await request(this.options(`users/${id}/sessions`, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        deleteUsersSession: async (id, type, session_id) => {
            try {
                return await request(this.options(`users/${id}/sessions/${type}/${session_id}`, 'DELETE', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getUsersSession: async (id, type, session_id) => {
            try {
                return await request(this.options(`users/${id}/sessions/${type}/${session_id}`, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
    };

// Vendors
// https://v2.developer.pagerduty.com/v2/page/api-reference#!/Vendors
    this.vendors = {
        listVendors: async () => {
            try {
                return await request(this.options('vendors', 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        },
        getVendor: async (id) => {
            try {
                return await request(this.options('vendors/' + id, 'GET', null, null))
            }
            catch (err) {
                throw new Error(err)
            }
        }
    };
}
