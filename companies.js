const mongoose = require("mongoose");

let companySchema = mongoose.Schema({
      "_id": {
            "type": "object",
            "properties": {
            "$oid": {
            "type": "string"
            }
            }
      },
      "name": {
            "type": "string"
      },
      "permalink": {
            "type": "string"
      },
      "crunchbase_url": {
            "type": "string"
      },
      "homepage_url": {
            "type": [
            "string",
            "null"
            ]
      },
      "blog_url": {
            "type": [
            "string",
            "null"
            ]
      },
      "blog_feed_url": {
            "type": [
            "string",
            "null"
            ]
      },
      "twitter_username": {
            "type": [
            "string",
            "null"
            ]
      },
      "category_code": {
            "type": [
            "string",
            "null"
            ]
      },
      "number_of_employees": {
            "type": [
            "number",
            "null"
            ]
      },
      "founded_year": {
            "type": [
            "number",
            "null"
            ]
      },
      "founded_month": {
            "type": [
            "number",
            "null"
            ]
      },
      "founded_day": {
            "type": [
            "null",
            "number"
            ]
      },
      "deadpooled_year": {
            "type": [
            "null",
            "number"
            ]
      },
      "deadpooled_month": {
            "type": [
            "null",
            "number"
            ]
      },
      "deadpooled_day": {
            "type": [
            "null",
            "number"
            ]
      },
      "deadpooled_url": {
            "type": [
            "null",
            "string"
            ]
      },
      "tag_list": {
            "type": [
            "string",
            "null"
            ]
      },
      "alias_list": {
            "type": [
            "string",
            "null"
            ]
      },
      "email_address": {
            "type": [
            "string",
            "null"
            ]
      },
      "phone_number": {
            "type": [
            "string",
            "null"
            ]
      },
      "description": {
            "type": [
            "string",
            "null"
            ]
      },
      "created_at": {
            "type": [
            "object",
            "string"
            ],
            "properties": {
            "$date": {
            "type": "string"
            }
            }
      },
      "updated_at": {
            "type": "string"
      },
      "overview": {
            "type": [
            "string",
            "null"
            ]
      },
      "products": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "name": {
                  "type": "string"
            },
            "permalink": {
                  "type": "string"
            }
            },
            "required": [
            "name",
            "permalink"
            ]
            }
      },
      "relationships": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "is_past": {
                  "type": [
                  "boolean",
                  "null"
                  ]
            },
            "title": {
                  "type": "string"
            },
            "person": {
                  "type": "object",
                  "properties": {
                  "first_name": {
                  "type": "string"
                  },
                  "last_name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "is_past",
            "title",
            "person"
            ]
            }
      },
      "competitions": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "competitor": {
                  "type": "object",
                  "properties": {
                  "name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "competitor"
            ]
            }
      },
      "providerships": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "title": {
                  "type": "string"
            },
            "is_past": {
                  "type": [
                  "boolean",
                  "null"
                  ]
            },
            "provider": {
                  "type": "object",
                  "properties": {
                  "name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "title",
            "is_past",
            "provider"
            ]
            }
      },
      "total_money_raised": {
            "type": "string"
      },
      "funding_rounds": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "id": {
                  "type": "number"
            },
            "round_code": {
                  "type": "string"
            },
            "source_url": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "source_description": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "raised_amount": {
                  "type": [
                  "object",
                  "number",
                  "null"
                  ],
                  "properties": {
                  "$numberLong": {
                  "type": "string"
                  }
                  }
            },
            "raised_currency_code": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "funded_year": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "funded_month": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "funded_day": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "investments": {
                  "type": "array",
                  "items": {
                  "type": "object",
                  "properties": {
                  "company": {
                        "type": [
                        "object",
                        "null"
                        ],
                        "properties": {
                        "name": {
                        "type": "string"
                        },
                        "permalink": {
                        "type": "string"
                        }
                        }
                  },
                  "financial_org": {
                        "type": "object",
                        "properties": {
                        "name": {
                        "type": "string"
                        },
                        "permalink": {
                        "type": "string"
                        }
                        }
                  },
                  "person": {
                        "type": [
                        "object",
                        "null"
                        ],
                        "properties": {
                        "first_name": {
                        "type": "string"
                        },
                        "last_name": {
                        "type": "string"
                        },
                        "permalink": {
                        "type": "string"
                        }
                        }
                  }
                  },
                  "required": [
                  "company",
                  "financial_org",
                  "person"
                  ]
                  }
            }
            },
            "required": [
            "id",
            "round_code",
            "source_url",
            "source_description",
            "raised_amount",
            "raised_currency_code",
            "funded_year",
            "funded_month",
            "funded_day",
            "investments"
            ]
            }
      },
      "investments": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "funding_round": {
                  "type": "object",
                  "properties": {
                  "round_code": {
                  "type": "string"
                  },
                  "source_url": {
                  "type": [
                        "string",
                        "null"
                  ]
                  },
                  "source_description": {
                  "type": [
                        "string",
                        "null"
                  ]
                  },
                  "raised_amount": {
                  "type": [
                        "object",
                        "number",
                        "null"
                  ],
                  "properties": {
                        "$numberLong": {
                        "type": "string"
                        }
                  }
                  },
                  "raised_currency_code": {
                  "type": [
                        "null",
                        "string"
                  ]
                  },
                  "funded_year": {
                  "type": [
                        "number",
                        "null"
                  ]
                  },
                  "funded_month": {
                  "type": [
                        "number",
                        "null"
                  ]
                  },
                  "funded_day": {
                  "type": [
                        "number",
                        "null"
                  ]
                  },
                  "company": {
                  "type": "object",
                  "properties": {
                        "name": {
                        "type": "string"
                        },
                        "permalink": {
                        "type": "string"
                        }
                  }
                  }
                  }
            }
            },
            "required": [
            "funding_round"
            ]
            }
      },
      "acquisition": {
            "type": "object",
            "properties": {
            "price_amount": {
            "type": [
                  "object",
                  "number",
                  "null"
            ],
            "properties": {
                  "$numberLong": {
                  "type": "string"
                  }
            }
            },
            "price_currency_code": {
            "type": "string"
            },
            "term_code": {
            "type": [
                  "null",
                  "string"
            ]
            },
            "source_url": {
            "type": [
                  "string",
                  "null"
            ]
            },
            "source_description": {
            "type": [
                  "string",
                  "null"
            ]
            },
            "acquired_year": {
            "type": [
                  "number",
                  "null"
            ]
            },
            "acquired_month": {
            "type": [
                  "number",
                  "null"
            ]
            },
            "acquired_day": {
            "type": [
                  "number",
                  "null"
            ]
            },
            "acquiring_company": {
            "type": "object",
            "properties": {
                  "name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
            }
            }
            }
      },
      "acquisitions": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "price_amount": {
                  "type": [
                  "object",
                  "null",
                  "number"
                  ],
                  "properties": {
                  "$numberLong": {
                  "type": "string"
                  }
                  }
            },
            "price_currency_code": {
                  "type": "string"
            },
            "term_code": {
                  "type": [
                  "null",
                  "string"
                  ]
            },
            "source_url": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "source_description": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "acquired_year": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "acquired_month": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "acquired_day": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "company": {
                  "type": "object",
                  "properties": {
                  "name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "price_amount",
            "price_currency_code",
            "term_code",
            "source_url",
            "source_description",
            "acquired_year",
            "acquired_month",
            "acquired_day",
            "company"
            ]
            }
      },
      "offices": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "description": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "address1": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "address2": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "zip_code": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "city": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "state_code": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "country_code": {
                  "type": "string"
            },
            "coord": {
                  "type": "object",
                  "properties": {
                  "coordinates": {
                  "type": "array",
                  "items": {
                        "oneOf": [
                        {
                        "type": "number"
                        },
                        {
                        "type": "null"
                        },
                        {
                        "type": "null"
                        }
                        ],
                        "type": "number"
                  }
                  },
                  "type": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "description",
            "address1",
            "address2",
            "zip_code",
            "city",
            "state_code",
            "country_code",
            "coord"
            ]
            }
      },
      "milestones": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "id": {
                  "type": "number"
            },
            "description": {
                  "type": "string"
            },
            "stoned_year": {
                  "type": "number"
            },
            "stoned_month": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "stoned_day": {
                  "type": [
                  "number",
                  "null"
                  ]
            },
            "source_url": {
                  "type": "string"
            },
            "source_text": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "stoneable_type": {
                  "type": "string"
            },
            "stoned_value": {
                  "type": "null"
            },
            "stoned_value_type": {
                  "type": "null"
            },
            "stoned_acquirer": {
                  "type": "null"
            },
            "stoneable": {
                  "type": "object",
                  "properties": {
                  "name": {
                  "type": "string"
                  },
                  "permalink": {
                  "type": "string"
                  }
                  }
            }
            },
            "required": [
            "id",
            "description",
            "stoned_year",
            "stoned_month",
            "stoned_day",
            "source_url",
            "source_text",
            "stoneable_type",
            "stoned_value",
            "stoned_value_type",
            "stoned_acquirer",
            "stoneable"
            ]
            }
      },
      "ipo": {
            "type": [
            "object",
            "null"
            ],
            "properties": {
            "valuation_amount": {
            "type": [
                  "object",
                  "null",
                  "number"
            ],
            "properties": {
                  "$numberLong": {
                  "type": "string"
                  }
            }
            },
            "valuation_currency_code": {
            "type": "string"
            },
            "pub_year": {
            "type": [
                  "number",
                  "null"
            ]
            },
            "pub_month": {
            "type": [
                  "number",
                  "null"
            ]
            },
            "pub_day": {
            "type": [
                  "null",
                  "number"
            ]
            },
            "stock_symbol": {
            "type": "string"
            }
            }
      },
      "video_embeds": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "embed_code": {
                  "type": "string"
            },
            "description": {
                  "type": "string"
            }
            },
            "required": [
            "embed_code",
            "description"
            ]
            }
      },
      "external_links": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "external_url": {
                  "type": "string"
            },
            "title": {
                  "type": "string"
            }
            },
            "required": [
            "external_url",
            "title"
            ]
            }
      },
      "partners": {
            "type": "array",
            "items": {
            "type": "object",
            "properties": {
            "partner_name": {
                  "type": "string"
            },
            "homepage_url": {
                  "type": "string"
            },
            "link_1_url": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "link_2_url": {
                  "type": [
                  "null",
                  "string"
                  ]
            },
            "link_3_url": {
                  "type": [
                  "null",
                  "string"
                  ]
            },
            "link_1_name": {
                  "type": [
                  "string",
                  "null"
                  ]
            },
            "link_2_name": {
                  "type": [
                  "null",
                  "string"
                  ]
            },
            "link_3_name": {
                  "type": [
                  "null",
                  "string"
                  ]
            }
            },
            "required": [
            "partner_name",
            "homepage_url",
            "link_1_url",
            "link_2_url",
            "link_3_url",
            "link_1_name",
            "link_2_name",
            "link_3_name"
            ]
            }
      }
})

let company = mongoose.model('companies', companySchema);

module.exports = company