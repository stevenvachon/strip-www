"use strict";
const pattern = /^www\.(.+\..+)$/;



function stripWWW(hostname)
{
	return hostname.replace(pattern, "$1");
}



module.exports = stripWWW;
