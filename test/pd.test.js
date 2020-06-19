const expect = require('chai').expect;
const sinon = require('sinon');


const Client = require('../lib/pd');

const pd = new Client('testapiToken');

describe('Client', () => {
    describe('constructor', () => {
       it('should have constructor property', () => {
           expect(Client.prototype).has.own.property('constructor');
       });
    });

    const fulfill = { statusCode: 200, body: 'success' };

    describe('Abilities Section', () => {
        describe('listAbilities function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.abilities, 'listAbilities').returns(Promise.resolve(fulfill));
                    return pd.abilities.listAbilities()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.abilities.listAbilities()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('testAbility function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.abilities, 'testAbility').returns(Promise.resolve(fulfill));
                    return pd.abilities.testAbility()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.abilities.testAbility()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
    });

    describe('AddOns Section', () => {
        describe('listAddOns function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.addOns, 'listAddOns').returns(Promise.resolve(fulfill));
                    return pd.addOns.listAddOns()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.addOns.listAddOns()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('installAddOn function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.addOns, 'installAddOn').returns(Promise.resolve(fulfill));
                    return pd.addOns.installAddOn()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.addOns.installAddOn()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('deleteAddOn function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.addOns, 'deleteAddOn').returns(Promise.resolve(fulfill));
                    return pd.addOns.deleteAddOn()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.addOns.deleteAddOn()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('getAddOn function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.addOns, 'getAddOn').returns(Promise.resolve(fulfill));
                    return pd.addOns.getAddOn()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.addOns.getAddOn()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('updateAddOn function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.addOns, 'updateAddOn').returns(Promise.resolve(fulfill));
                    return pd.addOns.updateAddOn()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.addOns.updateAddOn()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
    });

    describe('Analytics Section', () => {
        describe('getIncidentData function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.analytics, 'getIncidentData').returns(Promise.resolve(fulfill));
                    return pd.analytics.getIncidentData()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.analytics.getIncidentData()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('getIncidentsData function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.analytics, 'getIncidentsData').returns(Promise.resolve(fulfill));
                    return pd.analytics.getIncidentsData()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.analytics.getIncidentsData()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
    });

    describe('BusinessServices Section', () => {
        describe('listBusinessServices function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.businessServices, 'listBusinessServices').returns(Promise.resolve(fulfill));
                    return pd.businessServices.listBusinessServices()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.businessServices.listBusinessServices()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('createBusinessService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.businessServices, 'createBusinessService').returns(Promise.resolve(fulfill));
                    return pd.businessServices.createBusinessService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.businessServices.createBusinessService()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('deleteBusinessService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.businessServices, 'deleteBusinessService').returns(Promise.resolve(fulfill));
                    return pd.businessServices.deleteBusinessService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.businessServices.deleteBusinessService()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('getBusinessService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.businessServices, 'getBusinessService').returns(Promise.resolve(fulfill));
                    return pd.businessServices.getBusinessService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.businessServices.getBusinessService()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('updateBusinessService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.businessServices, 'updateBusinessService').returns(Promise.resolve(fulfill));
                    return pd.businessServices.updateBusinessService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.businessServices.updateBusinessService()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
    });

    describe('contextualSearch Section', () => {
        describe('listTags function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'listTags').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.listTags()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.listTags()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('createTag function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'createTag').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.createTag()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.createTag()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('deleteTag function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'deleteTag').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.deleteTag()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.deleteTag()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('getTag function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'getTag').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.getTag()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.getTag()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('getConnectedEntities function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'getConnectedEntities').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.getConnectedEntities()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.getConnectedEntities()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
        describe('assignTags function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.contextualSearch, 'assignTags').returns(Promise.resolve(fulfill));
                    return pd.contextualSearch.assignTags()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.contextualSearch.assignTags()
                        .catch(err => {
                            expect(err).to.not.eql({ statusCode: 200})
                        })
                });
            });
        });
    });

    describe('escalationPolicies Section', () => {
        describe('listEscalationPolicies function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.escalationPolicies, 'listEscalationPolicies').returns(Promise.resolve(fulfill));
                    return pd.escalationPolicies.listEscalationPolicies()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.escalationPolicies.listEscalationPolicies()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.escalationPolicies, 'createEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.escalationPolicies.createEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.escalationPolicies.createEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.escalationPolicies, 'deleteEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.escalationPolicies.deleteEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.escalationPolicies.deleteEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.escalationPolicies, 'getEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.escalationPolicies.getEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.escalationPolicies.getEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.escalationPolicies, 'updateEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.escalationPolicies.updateEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.escalationPolicies.updateEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('eventRules Section', () => {
        describe('listEventRules function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.eventRules, 'listEventRules').returns(Promise.resolve(fulfill));
                    return pd.eventRules.listEventRules()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.eventRules.listEventRules()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createEventRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.eventRules, 'createEventRule').returns(Promise.resolve(fulfill));
                    return pd.eventRules.createEventRule()
                        .then(res => {
                            console.log(res);
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.eventRules.createEventRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteEventRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.eventRules, 'deleteEventRule').returns(Promise.resolve(fulfill));
                    return pd.eventRules.deleteEventRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.eventRules.deleteEventRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateEventRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.eventRules, 'updateEventRule').returns(Promise.resolve(fulfill));
                    return pd.eventRules.updateEventRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.eventRules.updateEventRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('extensionSchemas Section', () => {
        describe('listExtensionSchemas function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensionSchemas, 'listExtensionSchemas').returns(Promise.resolve(fulfill));
                    return pd.extensionSchemas.listExtensionSchemas()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensionSchemas.listExtensionSchemas()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

        describe('getExtensionVendor function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensionSchemas, 'getExtensionVendor').returns(Promise.resolve(fulfill));
                    return pd.extensionSchemas.getExtensionVendor()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensionSchemas.getExtensionVendor()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

    });

    describe('extensions Section', () => {

        describe('listExtensions function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensions, 'listExtensions').returns(Promise.resolve(fulfill));
                    return pd.extensions.listExtensions()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensions.listExtensions()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

        describe('createExtension function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensions, 'createExtension').returns(Promise.resolve(fulfill));
                    return pd.extensions.createExtension()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensions.createExtension()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

        describe('deleteExtension function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensions, 'deleteExtension').returns(Promise.resolve(fulfill));
                    return pd.extensions.deleteExtension()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensions.deleteExtension()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

        describe('getExtension function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensions, 'getExtension').returns(Promise.resolve(fulfill));
                    return pd.extensions.getExtension()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensions.getExtension()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

        describe('updateExtension function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.extensions, 'updateExtension').returns(Promise.resolve(fulfill));
                    return pd.extensions.updateExtension()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.extensions.updateExtension()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

    });

    describe('events Section', () => {
        describe('sendEvent function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.events, 'sendEvent').returns(Promise.resolve(fulfill));
                    return pd.events.sendEvent()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.events.sendEvent()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('incidents Section', () => {
        describe('listIncidents function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'listIncidents').returns(Promise.resolve(fulfill));
                    return pd.incidents.listIncidents()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.listIncidents()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createIncident function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'createIncident').returns(Promise.resolve(fulfill));
                    return pd.incidents.createIncident()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.createIncident()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('manageIncident function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'manageIncident').returns(Promise.resolve(fulfill));
                    return pd.incidents.manageIncident()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.manageIncident()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('mergeIncidents function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'mergeIncidents').returns(Promise.resolve(fulfill));
                    return pd.incidents.mergeIncidents()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.mergeIncidents()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getIncident function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'getIncident').returns(Promise.resolve(fulfill));
                    return pd.incidents.getIncident()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.getIncident()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateIncident function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'updateIncident').returns(Promise.resolve(fulfill));
                    return pd.incidents.updateIncident()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.updateIncident()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listAlerts function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'listAlerts').returns(Promise.resolve(fulfill));
                    return pd.incidents.listAlerts()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.listAlerts()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('manageAlerts function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'manageAlerts').returns(Promise.resolve(fulfill));
                    return pd.incidents.manageAlerts()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.manageAlerts()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getAlert function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'getAlert').returns(Promise.resolve(fulfill));
                    return pd.incidents.getAlert()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.getAlert()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateAlert function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'updateAlert').returns(Promise.resolve(fulfill));
                    return pd.incidents.updateAlert()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.updateAlert()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listLogEntries function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'listLogEntries').returns(Promise.resolve(fulfill));
                    return pd.incidents.listLogEntries()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.listLogEntries()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listNotes function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'listNotes').returns(Promise.resolve(fulfill));
                    return pd.incidents.listNotes()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.listNotes()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createNote function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'createNote').returns(Promise.resolve(fulfill));
                    return pd.incidents.createNote()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.createNote()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createStatusUpdate function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'createStatusUpdate').returns(Promise.resolve(fulfill));
                    return pd.incidents.createStatusUpdate()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.createStatusUpdate()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createResponderRequest function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'createResponderRequest').returns(Promise.resolve(fulfill));
                    return pd.incidents.createResponderRequest()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.createResponderRequest()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('snoozeIncident function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.incidents, 'snoozeIncident').returns(Promise.resolve(fulfill));
                    return pd.incidents.snoozeIncident()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.incidents.snoozeIncident()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('priorities Section', () => {
        describe('listPriorities function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.priorities, 'listPriorities').returns(Promise.resolve(fulfill));
                    return pd.priorities.listPriorities()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.priorities.listPriorities()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('responsePlays Section', () => {
        describe('createResponsePlay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'createResponseReplay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.createResponseReplay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.createResponseReplay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteResponseReplay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'deleteResponseReplay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.deleteResponseReplay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.deleteResponseReplay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getResponseReplay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'getResponseReplay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.getResponseReplay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.getResponseReplay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listResponseReplay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'listResponseReplay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.listResponseReplay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.listResponseReplay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('runResponsePlay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'runResponsePlay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.runResponsePlay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.runResponsePlay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateResponseReplay function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.responsePlays, 'updateResponseReplay').returns(Promise.resolve(fulfill));
                    return pd.responsePlays.updateResponseReplay()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.responsePlays.updateResponseReplay()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('logEntries Section', () => {
        describe('listLogEntries function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.logEntries, 'listLogEntries').returns(Promise.resolve(fulfill));
                    return pd.logEntries.listLogEntries()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.logEntries.listLogEntries()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getLogEntry function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.logEntries, 'getLogEntry').returns(Promise.resolve(fulfill));
                    return pd.logEntries.getLogEntry()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.logEntries.getLogEntry()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('maintenanceWindows Section', () => {
        describe('listMaintenanceWindows function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.maintenanceWindows, 'listMaintenanceWindows').returns(Promise.resolve(fulfill));
                    return pd.maintenanceWindows.listMaintenanceWindows()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.maintenanceWindows.listMaintenanceWindows()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createMaintenanceWindow function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.maintenanceWindows, 'createMaintenanceWindow').returns(Promise.resolve(fulfill));
                    return pd.maintenanceWindows.createMaintenanceWindow()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.maintenanceWindows.createMaintenanceWindow()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteMaintenanceWindow function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.maintenanceWindows, 'deleteMaintenanceWindow').returns(Promise.resolve(fulfill));
                    return pd.maintenanceWindows.deleteMaintenanceWindow()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.maintenanceWindows.deleteMaintenanceWindow()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getMaintenanceWindow function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.maintenanceWindows, 'getMaintenanceWindow').returns(Promise.resolve(fulfill));
                    return pd.maintenanceWindows.getMaintenanceWindow()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.maintenanceWindows.getMaintenanceWindow()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateMaintenanceWindow function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.maintenanceWindows, 'updateMaintenanceWindow').returns(Promise.resolve(fulfill));
                    return pd.maintenanceWindows.updateMaintenanceWindow()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.maintenanceWindows.updateMaintenanceWindow()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('notifications Section', () => {
        describe('listNotifications function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.notifications, 'listNotifications').returns(Promise.resolve(fulfill));
                    return pd.notifications.listNotifications()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.notifications.listNotifications()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('onCalls Section', () => {
        describe('listAllOnCalls function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.onCalls, 'listAllOnCalls').returns(Promise.resolve(fulfill));
                    return pd.onCalls.listAllOnCalls()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.onCalls.listAllOnCalls()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('rulesets Section', () => {
        describe('listRulesets function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'listRulesets').returns(Promise.resolve(fulfill));
                    return pd.rulesets.listRulesets()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.listRulesets()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getRuleset function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'getRuleset').returns(Promise.resolve(fulfill));
                    return pd.rulesets.getRuleset()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.getRuleset()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createRuleset function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'createRuleset').returns(Promise.resolve(fulfill));
                    return pd.rulesets.createRuleset()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.createRuleset()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('updateRuleset function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'updateRuleset').returns(Promise.resolve(fulfill));
                    return pd.rulesets.updateRuleset()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.updateRuleset()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('deleteRuleset function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'deleteRuleset').returns(Promise.resolve(fulfill));
                    return pd.rulesets.deleteRuleset()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.deleteRuleset()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('listRulesetRules function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'listRulesetRules').returns(Promise.resolve(fulfill));
                    return pd.rulesets.listRulesetRules()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.listRulesetRules()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createRulesetRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'createRulesetRule').returns(Promise.resolve(fulfill));
                    return pd.rulesets.createRulesetRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.createRulesetRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('getRulesetRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'getRulesetRule').returns(Promise.resolve(fulfill));
                    return pd.rulesets.getRulesetRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.getRulesetRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('deleteRulesetRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'deleteRulesetRule').returns(Promise.resolve(fulfill));
                    return pd.rulesets.deleteRulesetRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.deleteRulesetRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('updateRulesetRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.rulesets, 'updateRulesetRule').returns(Promise.resolve(fulfill));
                    return pd.rulesets.updateRulesetRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.rulesets.updateRulesetRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });

    });
    describe('schedules Section', () => {
        describe('listSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'listSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.listSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.listSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'createSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.createSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.createSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('previewSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'previewSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.previewSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.previewSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'deleteSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.deleteSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.deleteSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'getSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.getSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.getSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateSchedule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'updateSchedule').returns(Promise.resolve(fulfill));
                    return pd.schedules.updateSchedule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.updateSchedule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listOverrides function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'listOverrides').returns(Promise.resolve(fulfill));
                    return pd.schedules.listOverrides()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.listOverrides()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createOverride function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'createOverride').returns(Promise.resolve(fulfill));
                    return pd.schedules.createOverride()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.createOverride()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteOverride function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'deleteOverride').returns(Promise.resolve(fulfill));
                    return pd.schedules.deleteOverride()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.deleteOverride()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listUsersOnCall function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.schedules, 'listUsersOnCall').returns(Promise.resolve(fulfill));
                    return pd.schedules.listUsersOnCall()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.schedules.listUsersOnCall()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });
    describe('serviceDependencies Section', () => {
        describe('getBusinessServiceDependencies function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.serviceDependencies, 'getBusinessServiceDependencies').returns(Promise.resolve(fulfill));
                    return pd.serviceDependencies.getBusinessServiceDependencies()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.serviceDependencies.getBusinessServiceDependencies()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('getTechnicalServiceDependencies function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.serviceDependencies, 'getTechnicalServiceDependencies').returns(Promise.resolve(fulfill));
                    return pd.serviceDependencies.getTechnicalServiceDependencies()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.serviceDependencies.getTechnicalServiceDependencies()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });        
        describe('associateDependencies function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.serviceDependencies, 'associateDependencies').returns(Promise.resolve(fulfill));
                    return pd.serviceDependencies.associateDependencies()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.serviceDependencies.associateDependencies()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
       describe('disassociateDependencies function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.serviceDependencies, 'disassociateDependencies').returns(Promise.resolve(fulfill));
                    return pd.serviceDependencies.disassociateDependencies()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.serviceDependencies.disassociateDependencies()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });
    describe('services Section', () => {
        describe('listServices function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'listServices').returns(Promise.resolve(fulfill));
                    return pd.services.listServices()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.listServices()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'createService').returns(Promise.resolve(fulfill));
                    return pd.services.createService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.createService()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'deleteService').returns(Promise.resolve(fulfill));
                    return pd.services.deleteService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.deleteService()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'getService').returns(Promise.resolve(fulfill));
                    return pd.services.getService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.getService()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateService function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'updateService').returns(Promise.resolve(fulfill));
                    return pd.services.updateService()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.updateService()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createIntegration function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'createIntegration').returns(Promise.resolve(fulfill));
                    return pd.services.createIntegration()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.createIntegration()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('viewIntegration function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'viewIntegration').returns(Promise.resolve(fulfill));
                    return pd.services.viewIntegration()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.viewIntegration()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateIntegration function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.services, 'updateIntegration').returns(Promise.resolve(fulfill));
                    return pd.services.updateIntegration()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.services.updateIntegration()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('teams Section', () => {
        describe('listTeams function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'listTeams').returns(Promise.resolve(fulfill));
                    return pd.teams.listTeams()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.listTeams()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createTeam function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'createTeam').returns(Promise.resolve(fulfill));
                    return pd.teams.createTeam()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.createTeam()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteTeam function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'deleteTeam').returns(Promise.resolve(fulfill));
                    return pd.teams.deleteTeam()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.deleteTeam()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getTeam function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'getTeam').returns(Promise.resolve(fulfill));
                    return pd.teams.getTeam()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.getTeam()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateTeam function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'updateTeam').returns(Promise.resolve(fulfill));
                    return pd.teams.updateTeam()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.updateTeam()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getTeamMembers function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'getTeamMembers').returns(Promise.resolve(fulfill));
                    return pd.teams.getTeamMembers()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.getTeamMembers()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('removeEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'removeEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.teams.removeEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.removeEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('addEscalationPolicy function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'addEscalationPolicy').returns(Promise.resolve(fulfill));
                    return pd.teams.addEscalationPolicy()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.addEscalationPolicy()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('removeUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'removeUser').returns(Promise.resolve(fulfill));
                    return pd.teams.removeUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.removeUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('addUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.teams, 'addUser').returns(Promise.resolve(fulfill));
                    return pd.teams.addUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.teams.addUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('users Section', () => {
        describe('listUsers function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'listUsers').returns(Promise.resolve(fulfill));
                    return pd.users.listUsers()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.listUsers()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'createUser').returns(Promise.resolve(fulfill));
                    return pd.users.createUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.createUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'deleteUser').returns(Promise.resolve(fulfill));
                    return pd.users.deleteUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.deleteUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'getUser').returns(Promise.resolve(fulfill));
                    return pd.users.getUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.getUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getCurrentUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'getCurrentUser').returns(Promise.resolve(fulfill));
                    return pd.users.getCurrentUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.getCurrentUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateUser function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'updateUser').returns(Promise.resolve(fulfill));
                    return pd.users.updateUser()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.updateUser()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listContactMethods function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'listContactMethods').returns(Promise.resolve(fulfill));
                    return pd.users.listContactMethods()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.listContactMethods()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createContactMethod function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'createContactMethod').returns(Promise.resolve(fulfill));
                    return pd.users.createContactMethod()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.createContactMethod()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteContactMethod function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'deleteContactMethod').returns(Promise.resolve(fulfill));
                    return pd.users.deleteContactMethod()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.deleteContactMethod()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getContactMethod function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'getContactMethod').returns(Promise.resolve(fulfill));
                    return pd.users.getContactMethod()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.getContactMethod()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateContactMethod function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'updateContactMethod').returns(Promise.resolve(fulfill));
                    return pd.users.updateContactMethod()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.updateContactMethod()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listNotificationRules function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'listNotificationRules').returns(Promise.resolve(fulfill));
                    return pd.users.listNotificationRules()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.listNotificationRules()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('createNotificationRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'createNotificationRule').returns(Promise.resolve(fulfill));
                    return pd.users.createNotificationRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.createNotificationRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteNotificationRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'deleteNotificationRule').returns(Promise.resolve(fulfill));
                    return pd.users.deleteNotificationRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.deleteNotificationRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getNotificationRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'getNotificationRule').returns(Promise.resolve(fulfill));
                    return pd.users.getNotificationRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.getNotificationRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('updateNotificationRule function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'updateNotificationRule').returns(Promise.resolve(fulfill));
                    return pd.users.updateNotificationRule()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.updateNotificationRule()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteAllUserSessions function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'deleteAllUserSessions').returns(Promise.resolve(fulfill));
                    return pd.users.deleteAllUserSessions()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.deleteAllUserSessions()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('listUserActiveSessions function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'listUserActiveSessions').returns(Promise.resolve(fulfill));
                    return pd.users.listUserActiveSessions()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.listUserActiveSessions()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('deleteUsersSession function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'deleteUsersSession').returns(Promise.resolve(fulfill));
                    return pd.users.deleteUsersSession()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.deleteUsersSession()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getUsersSession function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.users, 'getUsersSession').returns(Promise.resolve(fulfill));
                    return pd.users.getUsersSession()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.users.getUsersSession()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });

    describe('vendors Section', () => {
        describe('listVendors function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.vendors, 'listVendors').returns(Promise.resolve(fulfill));
                    return pd.vendors.listVendors()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.vendors.listVendors()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
        describe('getVendor function', () => {
            context('on success', () => {
                it('returns resolve', () => {
                    sinon.stub(pd.vendors, 'getVendor').returns(Promise.resolve(fulfill));
                    return pd.vendors.getVendor()
                        .then(res => {
                            expect(res.statusCode).to.eql(200)
                        })
                });
            });
            context('on failure', () => {
                it('returns error', () => {
                    return pd.vendors.getVendor()
                        .catch(err => {
                            expect(err).to.not.eql({statusCode: 200})
                        })
                });
            });
        });
    });
});