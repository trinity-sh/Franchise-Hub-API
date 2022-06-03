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
                        email_id: { type: String, required: true },
                        mobile: { type: String, required: true },
                        brand_name: { type: String, required: true },
                        company_name: { type: String, required: true },
                        owner_name: { type: String, required: true },
                        owner_email: { type: String, required: true },
                        owner_phone: { type: String, required: true },
                        address_det: { type: String, required: true },
                        country: { type: String, required: true },
                        state: { type: String, required: true },
                        city: { type: String, required: true },
                        pincode: { type: String, required: true },
                        industry: { type: String, required: true },
                        no_of_franch_outlets: { type: String, required: true },
                        inv: { type: Number, required: true },
                        business_desc: { type: String, required: true },
                        q_excl_terr_rights: { type: String, required: true },
                        q_perf_guarantees: { type: String, required: true },
                        q_adv_market_levies: { type: String, required: true },
                        antc_perc_ret: { type: Number, required: true },
                        likely_payback_period: {
                                min: { type: String, required: true },
                                max: { type: String, required: true },
                                month_yr: { type: String, required: true },
                        },
                        other_inv_req: { type: String, required: false },
                },
                property_details: {
                        typ_prop_req: { type: String, required: true },
                        floor_area_req: {
                                min: { type: String, required: true },
                                max: { type: String, required: true }
                        },
                        pref_loc: { type: String, required: true },
                        q_site_select_assist: { type: String, required: true },
                },
                training_details: {
                        q_hv_det_op_man: { type: String, required: true },
                        whr_franch_training: { type: String, required: true },
                        q_field_assist_avail: { type: String, required: true }
                },
                agreement_details: {
                        q_hv_std_franch_agr: { type: String, required: true },
                        duration_of_contr: { type: String, required: true },
                        q_term_renewable: { type: String, required: true }
                },
                final_rites: {
                        company_logo: { type: String, required: true },
                        video_link: { type: String, required: false },
                        gst_no: { type: String, required: true },
                        mode_of_payment: { type: String, required: true },
                        q_sub_news: { type: String, required: true }
                }
        }
}, {
        versionKey: false,
        timestamps: true,
});

module.exports = mongoose.model('fregn', fregnSchema, 'franchisor-registration');