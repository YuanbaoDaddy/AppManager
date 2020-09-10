(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{365:function(t,e,a){"use strict";a.r(e);var o=a(25),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"settings-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settings-page"}},[t._v("#")]),t._v(" Settings Page")]),t._v(" "),a("p",[t._v("Settings can be used to customize the behavior of the app.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Table of Contents")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#app-theme"}},[t._v("App Theme")])]),a("li",[a("a",{attrs:{href:"#root-mode"}},[t._v("Root Mode")]),a("ul",[a("li",[a("a",{attrs:{href:"#global-component-blocking"}},[t._v("Global Component Blocking")])])])]),a("li",[a("a",{attrs:{href:"#usage-access"}},[t._v("Usage Access")])]),a("li",[a("a",{attrs:{href:"#import-export-blocking-rules"}},[t._v("Import/Export Blocking Rules")]),a("ul",[a("li",[a("a",{attrs:{href:"#export"}},[t._v("Export")])]),a("li",[a("a",{attrs:{href:"#import"}},[t._v("Import")])]),a("li",[a("a",{attrs:{href:"#import-existing-rules"}},[t._v("Import Existing Rules")])]),a("li",[a("a",{attrs:{href:"#import-from-watt"}},[t._v("Import from Watt")])]),a("li",[a("a",{attrs:{href:"#import-from-blocker"}},[t._v("Import from Blocker")])])])])])]),a("p")]),t._v(" "),a("h2",{attrs:{id:"app-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-theme"}},[t._v("#")]),t._v(" App Theme")]),t._v(" "),a("p",[t._v("Application theme selection")]),t._v(" "),a("h2",{attrs:{id:"root-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#root-mode"}},[t._v("#")]),t._v(" Root Mode")]),t._v(" "),a("p",[t._v("Enable or disable root mode.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("To use "),a("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[t._v("ADB")]),t._v(", root mode has to be disabled at first and then preferably after a relaunch, ADB mode will be detected automatically.")],1)]),t._v(" "),a("p",[a("em",[t._v("See also: "),a("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[t._v("ADB over TCP")])],1)]),t._v(" "),a("h3",{attrs:{id:"global-component-blocking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#global-component-blocking"}},[t._v("#")]),t._v(" Global Component Blocking")]),t._v(" "),a("p",[t._v("Enable component blocking globally. By default, blocking rules are not applied unless they are applied in the "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[t._v("App Details")]),t._v(" page for any package. Upon enabling this option, all (old and new) rules are applied immediately for all apps without explicitly enabling blocking for any app.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),a("p",[t._v("Enabling this setting may have some unintended side-effects, such as rules that are not completely removed will get applied. So, proceed with caution. This option should be kept disabled if not required for some reasons.")])]),t._v(" "),a("p",[a("em",[t._v("See also: "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-is-global-component-blocking"}},[t._v("What is global component blocking?")])],1)]),t._v(" "),a("h2",{attrs:{id:"usage-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-access"}},[t._v("#")]),t._v(" Usage Access")]),t._v(" "),a("p",[t._v("Turning off this option disables the "),a("strong",[t._v("App Usage")]),t._v(" page as well as "),a("em",[t._v("data usage")]),t._v(" and "),a("em",[t._v("app storage info")]),t._v(" in the "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html#app-info-tab"}},[t._v("App Info tab")]),t._v(". With this option turned off, App Manager will never ask for "),a("em",[t._v("Usage Access")]),t._v(" permission")],1),t._v(" "),a("h2",{attrs:{id:"import-export-blocking-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-export-blocking-rules"}},[t._v("#")]),t._v(" Import/Export Blocking Rules")]),t._v(" "),a("p",[t._v("It is possible to import or export blocking rules within App Manager for all apps. There is a choice to export or import only certain rules (components, app ops or permissions) instead of all of them. It is also possible to import blocking rules from "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),a("OutboundLink")],1),t._v(". If it is necessary to export blocking rules for a single app, use the corresponding "),a("RouterLink",{attrs:{to:"/guide/app-details-page.html"}},[t._v("App Details")]),t._v(" page to export rules, or for multiple apps, use "),a("RouterLink",{attrs:{to:"/guide/main-page.html#batch-operations"}},[t._v("batch operations")]),t._v(".")],1),t._v(" "),a("p",[a("em",[t._v("See also: "),a("RouterLink",{attrs:{to:"/tech/rules-specification.html"}},[t._v("App Manager: Rules Specification")])],1)]),t._v(" "),a("h3",{attrs:{id:"export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export"}},[t._v("#")]),t._v(" Export")]),t._v(" "),a("p",[t._v("Export blocking rules for all apps configured within App Manager. This may include "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-are-the-app-components"}},[t._v("app components")]),t._v(", app ops and permissions based on what options is/are selected in the multichoice options.")],1),t._v(" "),a("h3",{attrs:{id:"import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[t._v("#")]),t._v(" Import")]),t._v(" "),a("p",[t._v("Import previously exported blocking rules from App Manager. Similar to export, this may include "),a("RouterLink",{attrs:{to:"/faq/app-components.html#what-are-the-app-components"}},[t._v("app components")]),t._v(", app ops and permissions based on what options is/are selected in the multichoice options.")],1),t._v(" "),a("h3",{attrs:{id:"import-existing-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-existing-rules"}},[t._v("#")]),t._v(" Import Existing Rules")]),t._v(" "),a("p",[t._v("Add components disabled by other apps to App Manager. App Manager only keeps track of component disabled within App Manager. If you use other tools to block app components, you can use this tools to import these disabled components. Clicking on this option triggers a search for disabled components and will lists apps with components disabled by user. For safety, all the apps are unselected by default. You can manually select the apps in the list and re-apply the blocking through App Manager.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Caution")]),t._v(" "),a("p",[t._v("Be careful when using this tool as there can be many false positives. Choose only the apps that you are certain about.")])]),t._v(" "),a("h3",{attrs:{id:"import-from-watt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-from-watt"}},[t._v("#")]),t._v(" Import from Watt")]),t._v(" "),a("p",[t._v("Import configuration files from "),a("a",{attrs:{href:"https://github.com/tuyafeng/Watt",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watt"),a("OutboundLink")],1),t._v(", each file containing rules for a single package and file name being the name of the package with "),a("code",[t._v(".xml")]),t._v(" extension.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Location of configuration files in Watt: "),a("tt",[t._v("/sdcard/Android/data/com.tuyafeng.watt/files/ifw")])],1)]),t._v(" "),a("h3",{attrs:{id:"import-from-blocker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-from-blocker"}},[t._v("#")]),t._v(" Import from Blocker")]),t._v(" "),a("p",[t._v("Import blocking rules from "),a("a",{attrs:{href:"https://github.com/lihenggui/blocker",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blocker"),a("OutboundLink")],1),t._v(", each file containing rules for a single package. These files have a "),a("code",[t._v(".json")]),t._v(" extension.")])])}),[],!1,null,null,null);e.default=s.exports}}]);