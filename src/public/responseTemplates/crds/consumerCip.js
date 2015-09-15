module.exports = {
    "statusCode": 200,
    "body": [
        {
            "customer_identifier": "1430038635246366080",
            "customer_type": "ACCOUNT",
            "name": "CIP",
            "compliance_region": "BR",
            "version": 1,
            "state": "IN_PROGRESS",
            "criteria": [],
            "sub_levels": [
                {
                    "customer_identifier": "1430038635246366080",
                    "customer_type": "PERSON_PARTY",
                    "customer_role": "PAYPAL_PRIMARY_USER",
                    "name": "{{level}}",
                    "compliance_region": "BR",
                    "version": 1,
                    "state": "IN_PROGRESS",
                    "criteria": [
                        {
                            "criteria_identifier": "Pd5SulNcRwYVf9eDt3AN5ZiBerUdV0dNMiotuMEJwgGT5qgqnfgaXiko60g1XnlJ",
                            "customer_identifier": "1430038635246366080",
                            "customer_type": "{{customerType}}",
                            "customer_role": "{{customerRole}}",
                            "name": "{{criteria}}",
                            "compliance_region": "BR",
                            "action": "WEBFORM",
                            "actor": "USER",
                            "mode": "AUTOMATED",
                            "approval_authority": "THIRD_PARTY",
                            "version": 1,
                            "state": "NOT_AVAILABLE",
                            "vendor": {
                                "type": "ZOOT"
                            },
                            "links": [
                                {
                                    "href": "/v1/compliance/criteria-decisions/Pd5SulNcRwYVf9eDt3AN5ZiBerUdV0dNMiotuMEJwgGT5qgqnfgaXiko60g1XnlJ/arbitrate",
                                    "rel": "decision",
                                    "method": "POST",
                                    "encType": "application/json"
                                }
                            ]
                        }
                    ],
                    "sub_levels": []
                }
            ]
        }
    ]
};