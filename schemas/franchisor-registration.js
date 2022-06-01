const mongoose = require('mongoose')

const fregnSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        required: true,
                        default: false
                },
                is_listed: {
                        type: Boolean,
                        required: true
                },
                is_promoted: {
                        type: Boolean,
                        required: true
                },
                likes: {
                        type: Number,
                        required: true,
                        default: 0
                },
                category: {
                        type: String,
                        enum: [
                                "automotive",
                                "beauty-and-health",
                                "business-services",
                                "dealers-and-distributors",
                                "education",
                                "fashion",
                                "food-and-beverage",
                                "home-based-business",
                                "hotel-travel-and-tourism",
                                "retail",
                                "sports-fitness-and-entertainment",
                                "others"
                        ],
                        default: "others"
                }
        },
        email: {
                type: String,
                required: true,
        },
        phone: {
                type: String,
                required: true
        },
        content: {
                business_details: {
                        type: String,
                        required: true,
                        minlength: 500,
                        maxlength: 4096
                },
                investment_details: {
                        op_comm_on: {
                                type: Number,
                                required: true,
                                min: 1800,
                                max: () => new Date().getFullYear()
                        },
                        fran_comm_on: {
                                type: Number,
                                required: true,
                                min: 1800,
                                max: () => new Date().getFullYear()
                        },
                        investment: {
                                type: String,
                                required: true
                        },
                        fran_brand_fee: {
                                type: String,
                                required: true
                        },
                        royalty_commssn: {
                                type: Number,
                                required: true,
                                min: 0,
                                max: 100
                        },
                        excl_terr_rights: {
                                type: Boolean,
                                required: true
                        },
                        antc_pcent_return: {
                                type: Number,
                                required: true,
                                min: 0,
                                max: 100
                        },
                        pay_back_period: {
                                type: String,
                                required: true
                        },
                        other_inv_req: {
                                type: String,
                                required: true,
                                default: "None"
                        }
                },
                property_details: {
                        prop_type: {
                                type: String,
                                required: true
                        },
                        flor_area_req: {
                                type: String,
                                required: true
                        },
                        pref_loc: {
                                type: String,
                                required: true
                        }
                },
                training_details: {
                        det_op_manual: {
                                type: Boolean,
                                required: true
                        },
                        fran_training_loc: {
                                type: String,
                                required: true
                        },
                        field_assist_avail: {
                                type: Boolean,
                                required: true
                        },
                        expert_guid: {
                                type: Boolean,
                                required: true
                        },
                        curr_itsys_incl: {
                                type: Boolean,
                                required: true
                        }
                },
                agreement_term_details: {
                        how_long: {
                                type: String,
                                required: true
                        },
                        is_term_renew: {
                                type: Boolean,
                                required: true
                        }
                }
        }
}, {
        versionKey: false,
        timestamps: true
});

module.exports = mongoose.model('fregn', fregnSchema, 'franchisor-registration');