const mongoose = require('mongoose')

const fregnSchema = new mongoose.Schema({
        metadata: {
                is_read: {
                        type: Boolean,
                        default: false
                },
                is_listed: {
                        type: Boolean,
                        default: false                  
                },
                is_promoted: {
                        type: Boolean,
                        default: false                       
                },
                likes: {
                        type: Number,
                        default: 0
                }
        },
        content: {
                personal_details: {
                        email_id: { type: String  },
                        mobile: { type: String  },
                        brand_name: { type: String  },
                        company_name: { type: String  },
                        owner_name: { type: String  },
                        owner_email: { type: String  },
                        owner_phone: { type: String  },
                        address_det: { type: String  },
                        country: { type: String  },
                        state: { type: String  },
                        city: { type: String  },
                        pincode: { type: String  },
                        industry: { type: String  },
                        no_of_franch_outlets: { type: String  },
                        inv: { type: Number  },
                        business_desc: { type: String  },
                        q_excl_terr_rights: { type: String  },
                        q_perf_guarantees: { type: String  },
                        q_adv_market_levies: { type: String  },
                        antc_perc_ret: { type: Number  },
                        likely_payback_period: {
                                min: { type: String  },
                                max: { type: String  },
                                month_yr: { type: String  }
                        },
                        other_inv_req: { type: String },
                },
                property_details: {
                        typ_prop_req: { type: String  },
                        floor_area_req: {
                                min: { type: String  },
                                max: { type: String  }
                        },
                        pref_loc: { type: String  },
                        q_site_select_assist: { type: String  },
                },
                training_details: {
                        q_hv_det_op_man: { type: String  },
                        whr_franch_training: { type: String  },
                        q_field_assist_avail: { type: String  }
                },
                agreement_details: {
                        q_hv_std_franch_agr: { type: String  },
                        duration_of_contr: { type: String  },
                        q_term_renewable: { type: String  }
                },
                final_rites: {
                        company_logo: { type: String  },
                        video_link: { type: String },
                        gst_no: { type: String  },
                        mode_of_payment: { type: String  },
                        q_sub_news: { type: String  }
                }
        }
}, {
        versionKey: false,
        timestamps: true,
});

module.exports = mongoose.model('fregn', fregnSchema, 'franchisor-registration');