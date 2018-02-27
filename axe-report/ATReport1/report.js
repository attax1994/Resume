var webdom_at_result = {
  "violations": [
    {
    "id": "bypass",
    "impact": "serious",
    "tags": ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o"],
    "description": "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
    "help": "Page must have means to bypass repeated blocks",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/bypass?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "internal-link-present",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "No valid skip link found"
      }, {
        "id": "header-present",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Page does not have a header"
      }, {
        "id": "landmark",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Page does not have a landmark region"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<html>",
      "target": ["html"],
      "xpath": ["/html"],
      "failureSummary": "Fix any of the following:\n  No valid skip link found\n  Page does not have a header\n  Page does not have a landmark region"
    }]
  }, {
    "id": "color-contrast",
    "impact": "serious",
    "tags": ["cat.color", "wcag2aa", "wcag143"],
    "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
    "help": "Elements must have sufficient color contrast",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/color-contrast?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#808080",
          "bgColor": "#ffffe8",
          "contrastRatio": 3.89,
          "fontSize": "8.0pt",
          "fontWeight": "normal"
        },
        "relatedNodes": [{
          "html": "<body onload=\"window_onload()\">",
          "target": ["html > body"],
          "xpath": ["/html/body"]
        }],
        "impact": "serious",
        "message": "Element has insufficient color contrast of 3.89 (foreground color: #808080, background color: #ffffe8, font size: 8.0pt, font weight: normal)"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<div class=\"smalltext\">Copyright © 1999 Microsoft Corporation.<br>Developed by \n\t\t\t<a href=\"http://www.vertigosoftware.com/default.asp?from=fms2k\" style=\"color:gray; cursor:hand\">Vertigo Software, Inc.</a></div>",
      "target": ["td:nth-child(2) > div.smalltext"],
      "xpath": ["/html/body/table/tbody/tr[4]/td[2]/div"],
      "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.89 (foreground color: #808080, background color: #ffffe8, font size: 8.0pt, font weight: normal)"
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#808080",
          "bgColor": "#ffffe8",
          "contrastRatio": 3.89,
          "fontSize": "8.0pt",
          "fontWeight": "normal"
        },
        "relatedNodes": [{
          "html": "<body onload=\"window_onload()\">",
          "target": ["html > body"],
          "xpath": ["/html/body"]
        }],
        "impact": "serious",
        "message": "Element has insufficient color contrast of 3.89 (foreground color: #808080, background color: #ffffe8, font size: 8.0pt, font weight: normal)"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<a href=\"http://www.vertigosoftware.com/default.asp?from=fms2k\" style=\"color:gray; cursor:hand\">Vertigo Software, Inc.</a>",
      "target": [".smalltext > a"],
      "xpath": ["/html/body/table/tbody/tr[4]/td[2]/div/a"],
      "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.89 (foreground color: #808080, background color: #ffffe8, font size: 8.0pt, font weight: normal)"
    }]
  }, {
    "id": "html-has-lang",
    "impact": "serious",
    "tags": ["cat.language", "wcag2a", "wcag311"],
    "description": "Ensures every HTML document has a lang attribute",
    "help": "<html> element must have a lang attribute",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/html-has-lang?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "has-lang",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "The <html> element does not have a lang attribute"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<html>",
      "target": ["html"],
      "xpath": ["/html"],
      "failureSummary": "Fix any of the following:\n  The <html> element does not have a lang attribute"
    }]
  }, {
    "id": "image-alt",
    "impact": "critical",
    "tags": ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a"],
    "description": "Ensures <img> elements have alternate text or a role of none or presentation",
    "help": "Images must have alternate text",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/image-alt?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/spacer.gif\" height=\"1\" width=\"358\">",
      "target": ["html > body > table > tbody > tr:nth-child(1) > td:nth-child(1) > img[src$=\"spacer.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr/td/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/spacer.gif\" height=\"1\" width=\"87\">",
      "target": ["html > body > table > tbody > tr:nth-child(1) > td:nth-child(2) > img[src$=\"spacer.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr/td[2]/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/spacer.gif\" height=\"1\" width=\"56\">",
      "target": ["td:nth-child(3) > img[src$=\"spacer.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr/td[3]/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/spacer.gif\" height=\"1\" width=\"203\">",
      "target": ["td:nth-child(4) > img[src$=\"spacer.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr/td[4]/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/Login_FMBanner1.gif\" height=\"95\" width=\"501\">",
      "target": ["td:nth-child(1) > img[src$=\"Login_FMBanner1.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr[2]/td/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/Login_FMBanner2.jpg\" height=\"95\" width=\"203\">",
      "target": ["td:nth-child(2) > img[src$=\"Login_FMBanner2.jpg\"]"],
      "xpath": ["/html/body/table/tbody/tr[2]/td[2]/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }, {
      "any": [{
        "id": "has-alt",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element does not have an alt attribute"
      }, {
        "id": "aria-label",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-label attribute does not exist or is empty"
      }, {
        "id": "aria-labelledby",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible"
      }, {
        "id": "non-empty-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has no title attribute or the title attribute is empty"
      }, {
        "id": "role-presentation",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"presentation\""
      }, {
        "id": "role-none",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element's default semantics were not overridden with role=\"none\""
      }],
      "all": [],
      "none": [],
      "impact": "critical",
      "html": "<img src=\"images/Login_CurveBottom.gif\" height=\"39\" width=\"358\">",
      "target": ["td:nth-child(1) > img[src$=\"Login_CurveBottom.gif\"]"],
      "xpath": ["/html/body/table/tbody/tr[4]/td/img"],
      "failureSummary": "Fix any of the following:\n  Element does not have an alt attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty or not visible\n  Element has no title attribute or the title attribute is empty\n  Element's default semantics were not overridden with role=\"presentation\"\n  Element's default semantics were not overridden with role=\"none\""
    }]
  }],
  "passes": [
    {
    "id": "aria-hidden-body",
    "impact": null,
    "tags": ["cat.aria", "wcag2a", "wcag412"],
    "description": "Ensures aria-hidden='true' is not present on the document body.",
    "help": "aria-hidden='true' must not be present on the document body",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/aria-hidden-body?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "aria-hidden-body",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "No aria-hidden attribute is present on document body"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<body onload=\"window_onload()\">",
      "target": ["html > body"],
      "xpath": ["/html/body"]
    }]
  }, {
    "id": "button-name",
    "impact": null,
    "tags": ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a"],
    "description": "Ensures buttons have discernible text",
    "help": "Buttons must have discernible text",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/button-name?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "non-empty-value",
        "data": null,
        "relatedNodes": [],
        "impact": "critical",
        "message": "Element has a non-empty value attribute"
      }],
      "all": [],
      "none": [{
        "id": "focusable-no-name",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element is not in tab order or has accessible text"
      }],
      "impact": null,
      "html": "<input value=\"Login\" name=\"LoginButton\" type=\"submit\">",
      "target": ["td:nth-child(2) > input[type=\"submit\"][name=\"LoginButton\"]"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[4]/td[2]/input"]
    }]
  }, {
    "id": "color-contrast",
    "impact": "serious",
    "tags": ["cat.color", "wcag2aa", "wcag143"],
    "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
    "help": "Elements must have sufficient color contrast",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/color-contrast?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "bgColor": "#ffffff",
          "contrastRatio": 21,
          "fontSize": "8.0pt",
          "fontWeight": "normal"
        },
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has sufficient color contrast of 21"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<input id=\"login\" name=\"login\" value=\"ta334\">",
      "target": ["#login"],
      "xpath": ["/input[@id='login']"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "bgColor": "#ffffff",
          "contrastRatio": 21,
          "fontSize": "8.0pt",
          "fontWeight": "normal"
        },
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has sufficient color contrast of 21"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<input name=\"password\" value=\"ta\" type=\"password\">",
      "target": ["td:nth-child(2) > input[type=\"password\"][name=\"password\"]"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[3]/td[2]/input"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "bgColor": "#f0f0f0",
          "contrastRatio": 18.42,
          "fontSize": "8.0pt",
          "fontWeight": "normal"
        },
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element has sufficient color contrast of 18.42"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<input value=\"Login\" name=\"LoginButton\" type=\"submit\">",
      "target": ["td:nth-child(2) > input[type=\"submit\"][name=\"LoginButton\"]"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[4]/td[2]/input"]
    }]
  }, {
    "id": "document-title",
    "impact": null,
    "tags": ["cat.text-alternatives", "wcag2a", "wcag242"],
    "description": "Ensures each HTML document contains a non-empty <title> element",
    "help": "Documents must have <title> element to aid in navigation",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/document-title?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "doc-has-title",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Document has a non-empty <title> element"
      }], "all": [], "none": [], "impact": null, "html": "<html>", "target": ["html"], "xpath": ["/html"]
    }]
  }, {
    "id": "duplicate-id",
    "impact": null,
    "tags": ["cat.parsing", "wcag2a", "wcag411"],
    "description": "Ensures every id attribute value is unique",
    "help": "id attribute value must be unique",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/duplicate-id?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "duplicate-id",
        "data": "loginform",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<form action=\"default.asp\" id=\"loginform\" method=\"post\" name=\"loginform\">",
      "target": ["#loginform"],
      "xpath": ["/form[@id='loginform']"]
    }, {
      "any": [{
        "id": "duplicate-id",
        "data": "login",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<input id=\"login\" name=\"login\" value=\"ta334\">",
      "target": ["#login"],
      "xpath": ["/input[@id='login']"]
    }, {
      "any": [{
        "id": "duplicate-id",
        "data": "title",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<span id=\"title\" name=\"title\" style=\"top=50;width=159;height=30; filter:revealTrans(transition=12,duration=0.3)\"></span>",
      "target": ["#title"],
      "xpath": ["/span[@id='title']"]
    }, {
      "any": [{
        "id": "duplicate-id",
        "data": "fxdriver-screenshot-canvas",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<canvas id=\"fxdriver-screenshot-canvas\" style=\"display: none;\" width=\"1920\" height=\"919\"></canvas>",
      "target": ["#fxdriver-screenshot-canvas"],
      "xpath": ["/canvas[@id='fxdriver-screenshot-canvas']"]
    }, {
      "any": [{
        "id": "duplicate-id",
        "data": "oats_opensctipt_webdom_accessibilitytesting_id",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<script id=\"oats_opensctipt_webdom_accessibilitytesting_id\" type=\"text/javascript\">",
      "target": ["#oats_opensctipt_webdom_accessibilitytesting_id"],
      "xpath": ["/script[@id='oats_opensctipt_webdom_accessibilitytesting_id']"]
    }, {
      "any": [{
        "id": "duplicate-id",
        "data": "oats_opensctipt_webdom_accessibilitytesting_run",
        "relatedNodes": [],
        "impact": "moderate",
        "message": "Document has no elements that share the same id attribute"
      }],
      "all": [],
      "none": [],
      "impact": null,
      "html": "<script id=\"oats_opensctipt_webdom_accessibilitytesting_run\" type=\"text/javascript\">",
      "target": ["#oats_opensctipt_webdom_accessibilitytesting_run"],
      "xpath": ["/script[@id='oats_opensctipt_webdom_accessibilitytesting_run']"]
    }]
  }, {
    "id": "image-redundant-alt",
    "impact": null,
    "tags": ["cat.text-alternatives", "best-practice"],
    "description": "Ensure button and link text is not repeated as image alternative",
    "help": "Text of buttons and links should not be repeated in the image alternative",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/image-redundant-alt?application=axeAPI",
    "nodes": [{
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/spacer.gif\" height=\"1\" width=\"358\"></td>",
      "target": ["html > body > table > tbody > tr:nth-child(1) > td:nth-child(1)"],
      "xpath": ["/html/body/table/tbody/tr/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/spacer.gif\" height=\"1\" width=\"87\"></td>",
      "target": ["html > body > table > tbody > tr:nth-child(1) > td:nth-child(2)"],
      "xpath": ["/html/body/table/tbody/tr/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/spacer.gif\" height=\"1\" width=\"56\"></td>",
      "target": ["tr:nth-child(1) > td:nth-child(3)"],
      "xpath": ["/html/body/table/tbody/tr/td[3]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/spacer.gif\" height=\"1\" width=\"203\"></td>",
      "target": ["tr:nth-child(1) > td:nth-child(4)"],
      "xpath": ["/html/body/table/tbody/tr/td[4]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td colspan=\"3\">\n\t\t\t<img src=\"images/Login_FMBanner1.gif\" height=\"95\" width=\"501\"></td>",
      "target": ["html > body > table > tbody > tr:nth-child(2) > td:nth-child(1)"],
      "xpath": ["/html/body/table/tbody/tr[2]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/Login_FMBanner2.jpg\" height=\"95\" width=\"203\"></td>",
      "target": ["html > body > table > tbody > tr:nth-child(2) > td:nth-child(2)"],
      "xpath": ["/html/body/table/tbody/tr[2]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
      "xpath": ["/html/body/table/tbody/tr[3]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td colspan=\"2\"><p class=\"loginsection\">FMStocks Customer Login</p><br></td>",
      "target": ["#loginform > table > tbody > tr:nth-child(1) > td"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<p class=\"loginsection\">FMStocks Customer Login</p>",
      "target": ["td > p.loginsection"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr/td/p"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>Email:</td>",
      "target": ["#loginform > table > tbody > tr:nth-child(2) > td:nth-child(1)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[2]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td><input id=\"login\" name=\"login\" value=\"ta334\"></td>",
      "target": ["#loginform > table > tbody > tr:nth-child(2) > td:nth-child(2)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[2]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>Password:</td>",
      "target": ["#loginform > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[3]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td><input name=\"password\" value=\"ta\" type=\"password\"></td>",
      "target": ["#loginform > table > tbody > tr:nth-child(3) > td:nth-child(2)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[3]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>&nbsp;</td>",
      "target": ["#loginform > table > tbody > tr:nth-child(4) > td:nth-child(1)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[4]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td><input value=\"Login\" name=\"LoginButton\" type=\"submit\"></td>",
      "target": ["#loginform > table > tbody > tr:nth-child(4) > td:nth-child(2)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[4]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<a href=\"_NewAccount.asp\">Open a new account.</a>",
      "target": ["div > a[href$=\"_NewAccount.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<a href=\"_about.asp\">about</a>",
      "target": ["div > a[href$=\"_about.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"259\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(2)"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td class=\"title\">\n\t\t\t\t\t\t<span id=\"title\" name=\"title\" style=\"top=50;width=159;height=30; filter:revealTrans(transition=12,duration=0.3)\"></span>\n\t\t\t\t\t</td>",
      "target": ["tr:nth-child(1) > td.title"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]/table/tbody/tr/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td style=\"padding-left=-30px;padding-top=5px;text-align=right\" width=\"500\">\n\t\t\t\t\t<!-- misc. status text can go here -->\n\t\t\t\t\t</td>",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]/table/tbody/tr[2]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td>\n\t\t\t<img src=\"images/Login_CurveBottom.gif\" height=\"39\" width=\"358\"></td>",
      "target": ["html > body > table > tbody > tr:nth-child(4) > td:nth-child(1)"],
      "xpath": ["/html/body/table/tbody/tr[4]/td"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<td colspan=\"3\" height=\"39\" width=\"346\">\n\t\t\t<div class=\"smalltext\">Copyright © 1999 Microsoft Corporation.<br>Developed by \n\t\t\t<a href=\"http://www.vertigosoftware.com/default.asp?from=fms2k\" style=\"color:gray; cursor:hand\">Vertigo Software, Inc.</a></div>\n\t\t</td>",
      "target": ["html > body > table > tbody > tr:nth-child(4) > td:nth-child(2)"],
      "xpath": ["/html/body/table/tbody/tr[4]/td[2]"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "duplicate-img-label",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element does not duplicate existing text in <img> alt text"
      }],
      "impact": null,
      "html": "<a href=\"http://www.vertigosoftware.com/default.asp?from=fms2k\" style=\"color:gray; cursor:hand\">Vertigo Software, Inc.</a>",
      "target": [".smalltext > a"],
      "xpath": ["/html/body/table/tbody/tr[4]/td[2]/div/a"]
    }]
  }, {
    "id": "layout-table",
    "impact": null,
    "tags": ["cat.semantics", "wcag2a", "wcag131"],
    "description": "Ensures presentational <table> elements do not use <th>, <caption> elements or the summary attribute",
    "help": "Layout tables must not use data table elements",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/layout-table?application=axeAPI",
    "nodes": [{
      "any": [],
      "all": [],
      "none": [{
        "id": "has-th",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <th> elements"
      }, {
        "id": "has-caption",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <caption> element"
      }, {
        "id": "has-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use summary attribute"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">",
      "target": ["body > table"],
      "xpath": ["/html/body/table"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "has-th",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <th> elements"
      }, {
        "id": "has-caption",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <caption> element"
      }, {
        "id": "has-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use summary attribute"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"80%\">",
      "target": ["#loginform > table"],
      "xpath": ["/form[@id='loginform']/table"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "has-th",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <th> elements"
      }, {
        "id": "has-caption",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use <caption> element"
      }, {
        "id": "has-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Layout table does not use summary attribute"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(2) > table"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]/table"]
    }]
  }, {
    "id": "link-name",
    "impact": null,
    "tags": ["cat.name-role-value", "wcag2a", "wcag111", "wcag412", "wcag244", "section508", "section508.22.a"],
    "description": "Ensures links have discernible text",
    "help": "Links must have discernible text",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/link-name?application=axeAPI",
    "nodes": [{
      "any": [{
        "id": "has-visible-text",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element has text that is visible to screen readers"
      }],
      "all": [],
      "none": [{
        "id": "focusable-no-name",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element is not in tab order or has accessible text"
      }],
      "impact": null,
      "html": "<a href=\"_NewAccount.asp\">Open a new account.</a>",
      "target": ["div > a[href$=\"_NewAccount.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a"]
    }, {
      "any": [{
        "id": "has-visible-text",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element has text that is visible to screen readers"
      }],
      "all": [],
      "none": [{
        "id": "focusable-no-name",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element is not in tab order or has accessible text"
      }],
      "impact": null,
      "html": "<a href=\"_about.asp\">about</a>",
      "target": ["div > a[href$=\"_about.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a[2]"]
    }, {
      "any": [{
        "id": "has-visible-text",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Element has text that is visible to screen readers"
      }],
      "all": [],
      "none": [{
        "id": "focusable-no-name",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "Element is not in tab order or has accessible text"
      }],
      "impact": null,
      "html": "<a href=\"http://www.vertigosoftware.com/default.asp?from=fms2k\" style=\"color:gray; cursor:hand\">Vertigo Software, Inc.</a>",
      "target": [".smalltext > a"],
      "xpath": ["/html/body/table/tbody/tr[4]/td[2]/div/a"]
    }]
  }, {
    "id": "table-duplicate-name",
    "impact": null,
    "tags": ["cat.tables", "best-practice"],
    "description": "Ensure that tables do not have the same summary and caption",
    "help": "The <caption> element should not contain the same text as the summary attribute",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/table-duplicate-name?application=axeAPI",
    "nodes": [{
      "any": [],
      "all": [],
      "none": [{
        "id": "same-caption-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Content of summary attribute and <caption> are not duplicated"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">",
      "target": ["body > table"],
      "xpath": ["/html/body/table"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "same-caption-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Content of summary attribute and <caption> are not duplicated"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"80%\">",
      "target": ["#loginform > table"],
      "xpath": ["/form[@id='loginform']/table"]
    }, {
      "any": [],
      "all": [],
      "none": [{
        "id": "same-caption-summary",
        "data": null,
        "relatedNodes": [],
        "impact": "minor",
        "message": "Content of summary attribute and <caption> are not duplicated"
      }],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(2) > table"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]/table"]
    }]
  }, {
    "id": "td-headers-attr",
    "impact": null,
    "tags": ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g"],
    "description": "Ensure that each cell in a table using the headers refers to another cell in that table",
    "help": "All cells in a table element that use the headers attribute must only refer to other cells of that same table",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/td-headers-attr?application=axeAPI",
    "nodes": [{
      "any": [],
      "all": [{
        "id": "td-headers-attr",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "The headers attribute is exclusively used to refer to other cells in the table"
      }],
      "none": [],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\">",
      "target": ["body > table"],
      "xpath": ["/html/body/table"]
    }, {
      "any": [],
      "all": [{
        "id": "td-headers-attr",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "The headers attribute is exclusively used to refer to other cells in the table"
      }],
      "none": [],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"80%\">",
      "target": ["#loginform > table"],
      "xpath": ["/form[@id='loginform']/table"]
    }, {
      "any": [],
      "all": [{
        "id": "td-headers-attr",
        "data": null,
        "relatedNodes": [],
        "impact": "serious",
        "message": "The headers attribute is exclusively used to refer to other cells in the table"
      }],
      "none": [],
      "impact": null,
      "html": "<table cellspacing=\"0\" cellpadding=\"0\" border=\"0\" width=\"100%\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(2) > table"],
      "xpath": ["/html/body/table/tbody/tr[3]/td[2]/table"]
    }]
  }],
  "incomplete": [{
    "id": "color-contrast",
    "impact": "serious",
    "tags": ["cat.color", "wcag2aa", "wcag143"],
    "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
    "help": "Elements must have sufficient color contrast",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/color-contrast?application=axeAPI",
    "nodes": [
      {
      "any": [
        {
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "normal",
          "missingData": "bgImage"
        },
        "relatedNodes": [
          {
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }, {
          "id": "color-contrast",
          "data": {
            "fgColor": "#000000",
            "contrastRatio": 0,
            "fontSize": "8.0pt",
            "fontWeight": "normal",
            "missingData": "bgImage"
          },
          "relatedNodes": [
            {
              "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
              "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
              "xpath": ["/html/body/table/tbody/tr[3]/td"]
            }],
          "impact": "serious",
          "message": "This is a second line!!!!!! A second message!!"
        }
      ],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<div style=\"margin-left: 51px; margin-top:40px\">",
      "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1) > div"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#ffcc66",
          "contrastRatio": 0,
          "fontSize": "16.0pt",
          "fontWeight": "bold",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<p class=\"loginsection\">FMStocks Customer Login</p>",
      "target": ["td > p.loginsection"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr/td/p"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "normal",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<td>Email:</td>",
      "target": ["#loginform > table > tbody > tr:nth-child(2) > td:nth-child(1)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[2]/td"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "normal",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<td>Password:</td>",
      "target": ["#loginform > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
      "xpath": ["/form[@id='loginform']/table/tbody/tr[3]/td"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#0000ee",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "normal",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<a href=\"_NewAccount.asp\">Open a new account.</a>",
      "target": ["div > a[href$=\"_NewAccount.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "bold",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<b>ta1</b>",
      "target": ["div > b:nth-child(5)"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/b"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "bold",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<b>ta1000</b>",
      "target": ["div > b:nth-child(7)"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/b[2]"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#000000",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "bold",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<b>ta</b>",
      "target": ["div > b:nth-child(8)"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/b[3]"]
    }, {
      "any": [{
        "id": "color-contrast",
        "data": {
          "fgColor": "#0000ee",
          "contrastRatio": 0,
          "fontSize": "8.0pt",
          "fontWeight": "normal",
          "missingData": "bgImage"
        },
        "relatedNodes": [{
          "html": "<td colspan=\"2\" valign=\"top\" height=\"411\" width=\"445\" background=\"images/Login_CurveTop.gif\">",
          "target": ["html > body > table > tbody > tr:nth-child(3) > td:nth-child(1)"],
          "xpath": ["/html/body/table/tbody/tr[3]/td"]
        }],
        "impact": "serious",
        "message": "Element's background color could not be determined due to a background image"
      }],
      "all": [],
      "none": [],
      "impact": "serious",
      "html": "<a href=\"_about.asp\">about</a>",
      "target": ["div > a[href$=\"_about.asp\"]"],
      "xpath": ["/html/body/table/tbody/tr[3]/td/div/a[2]"]
    }]
  }, {
    "id": "label",
    "impact": null,
    "description": "Ensures every form element has a label",
    "message": "`TypeError: a.getAttribute(...) is null` - feature unsupported in your environment. Skipping label rule.",
    "stack": "b@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:244\na/q.prototype.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:8506\na/e.prototype.run/</<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4853\ne@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1381\nc/n.defer@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1772\na/e.prototype.run/<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4831\na/e.prototype.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4653\nA/<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:6371\ne@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1381\nc/n.defer@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1772\nA@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:6301\na/axe.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:13817\noats_webdom_run_accessibility_validation@http://bur00aqk.us.oracle.com/fmstocks/default.asp:2:3\n@resource://gre/modules/RemoteAddonsParent.jsm:780:33\n",
    "error": {
      "name": "SupportError",
      "cause": {},
      "message": "`TypeError: a.getAttribute(...) is null` - feature unsupported in your environment. Skipping label rule.",
      "ruleId": "label",
      "stack": "b@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:244\na/q.prototype.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:8506\na/e.prototype.run/</<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4853\ne@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1381\nc/n.defer@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1772\na/e.prototype.run/<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4831\na/e.prototype.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:4653\nA/<@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:6371\ne@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1381\nc/n.defer@http://bur00aqk.us.oracle.com/fmstocks/default.asp:37:1772\nA@http://bur00aqk.us.oracle.com/fmstocks/default.asp:12:6301\na/axe.run@http://bur00aqk.us.oracle.com/fmstocks/default.asp:13:13817\noats_webdom_run_accessibility_validation@http://bur00aqk.us.oracle.com/fmstocks/default.asp:2:3\n@resource://gre/modules/RemoteAddonsParent.jsm:780:33\n"
    },
    "tags": ["cat.forms", "wcag2a", "wcag332", "wcag131", "section508", "section508.22.n"],
    "help": "Form elements must have labels",
    "helpUrl": "https://dequeuniversity.com/rules/axe/3.0/label?application=axeAPI",
    "nodes": []
  }],
  "inapplicable": [],
  "timestamp": "2018-01-08T02:48:32.843Z",
  "url": "http://bur00aqk.us.oracle.com/fmstocks/default.asp"
}
