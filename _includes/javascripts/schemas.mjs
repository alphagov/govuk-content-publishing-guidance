// https://github.com/alphagov/govuk_publishing_components/blob/main/app/assets/javascripts/govuk_publishing_components/analytics-ga4/ga4-schemas.js
// to get the same event structure as used on GOV.UK, sadly not an importable
// module so need to hardcode this copy-and-paste (and update it if changes) :(
class Schemas {
  static eventSchema = {
    event: undefined,
    event_data: {
      event_name: undefined,
      type: undefined,
      url: undefined,
      text: undefined,
      text_2: undefined,
      text_3: undefined,
      text_4: undefined,
      text_5: undefined,
      index: {
        index_link: undefined,
        index_section: undefined,
        index_section_count: undefined
      },
      index_total: undefined,
      section: undefined,
      action: undefined,
      external: undefined,
      method: undefined,
      link_domain: undefined,
      tool_name: undefined,
      percent_scrolled: undefined,
      video_current_time: undefined,
      length: undefined,
      video_percent: undefined,
      autocomplete_input: undefined,
      autocomplete_suggestions: undefined,
      content_id: undefined,
      user_id: undefined
    }
  }

  static ecommerceSchema = {
    event: undefined,
    search_results: {
      event_name: undefined,
      term: undefined,
      sort: undefined,
      results: undefined,
      ecommerce: {
        items: []
      }
    },
    event_data: {
      external: true
    }
  }

  // merge allowed data attributes into the event schema
  static mergeProperties = function (data, eventAttribute, schema = this.eventSchema) {
    schema.event = eventAttribute

    for (var property in data) {
      // some passed data might be undefined, don't want it to overwrite e.g. the index sub parameters
      if (data[property] !== undefined) {
        schema[eventAttribute] = this.addToObject(schema[eventAttribute], property, data[property])
      }
    }
    return schema
  }

  static isAnObject = function (item) {
    if (typeof item === 'object' && !Array.isArray(item) && item !== null) {
      return true
    }
  }

  // given an object and a key, insert a value into object[key] if it exists
  static addToObject = function (obj, key, value) {
    if (key in obj) {
      obj[key] = value // ensure is a string
      return obj
    } else {
      // check for one level of nesting in the object
      for (var property in obj) {
        if (this.isAnObject(obj[property])) {
          if (key in obj[property]) {
            obj[property][key] = value + '' // ensure is a string
            return obj
          }
        }
      }
    }
    return obj
  }  
}

export default Schemas
