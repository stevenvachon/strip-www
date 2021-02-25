"use strict";
const {parseDomain, ParseResultType} = require("parse-domain");



const stripWWW = hostname =>
{
	const parsed = parseDomain(hostname);

	if (parsed.type !== ParseResultType.Listed)
	{
		return hostname;
	}
	else
	{
		const domain = parsed.domain ? [parsed.domain] : [];
		const subdomains = parsed.subDomains[0] === "www" ? parsed.subDomains.slice(1) : parsed.subDomains;

		return [...subdomains, ...domain, ...parsed.topLevelDomains].join(".");
	}
};



module.exports = stripWWW;
