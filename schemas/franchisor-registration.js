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
                }
        },
        content: {
                personal_details: {
                        email_id: { required: true },
                        mobile: { required: true },
                        brand_name: { required: true },
                        company_name: { required: true },
                        owner_name: { required: true },
                        owner_email: { required: true },
                        owner_phone: { required: true },
                        address_det: { required: true },
                        country: { required: true },
                        state: { required: true },
                        city: { required: true },
                        pincode: { required: true },
                        industry: { required: true },
                        no_of_franch_outlets: { required: true },
                        inv: { required: true },
                        business_desc: { required: true },
                        q_excl_terr_rights: { required: true },
                        q_perf_guarantees: { required: true },
                        q_adv_market_levies: { required: true },
                        antc_perc_ret: { required: true },
                        likely_payback_period: {
                                min: { required: true },
                                max: { required: true },
                                month_yr: { required: true },
                        },
                        other_inv_req: { required: false },
                },
                property_details: {
                        typ_prop_req: { required: true },
                        floor_area_req: {
                                min: { required: true },
                                max: { required: true }
                        },
                        pref_loc: { required: true },
                        q_site_select_assist: { required: true },
                },
                training_details: {
                        q_hv_det_op_man: { required: true },
                        whr_franch_training: { required: true },
                        q_field_assist_avail: { required: true }
                },
                agreement_details: {
                        q_hv_std_franch_agr: { required: true },
                        duration_of_contr: { required: true },
                        q_term_renewable: { required: true }
                },
                final_rites: {
                        company_logo: { required: true },
                        video_link: { required: false },
                        gst_no: { required: true },
                        mode_of_payment: { required: true },
                        q_sub_news: { required: true }
                }
        }
}, {
        versionKey: false,
        timestamps: true,
});

module.exports = mongoose.model('fregn', fregnSchema, 'franchisor-registration');