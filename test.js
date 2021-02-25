"use strict";
const expect = require("chai").expect;
const stripWWW = require("./");



it(`removes a "www" subdomain`, () =>
{
	expect( stripWWW("www.domain.com") ).to.equal("domain.com");
	expect( stripWWW("www.domain.co.uk") ).to.equal("domain.co.uk");
	expect( stripWWW("www.ᄯᄯᄯ.com") ).to.equal("ᄯᄯᄯ.com");

	expect( stripWWW("www2.domain.com") ).to.equal("www2.domain.com");
	expect( stripWWW("wwww.domain.com") ).to.equal("wwww.domain.com");
	expect( stripWWW("wwww.ᄯᄯᄯ.com") ).to.equal("wwww.ᄯᄯᄯ.com");

	expect( stripWWW("www.www.domain.com") ).to.equal("www.domain.com");
	expect( stripWWW("www.www.domain.co.uk") ).to.equal("www.domain.co.uk");
	expect( stripWWW("www.www.ᄯᄯᄯ.com") ).to.equal("www.ᄯᄯᄯ.com");
});



it(`doesn't remove a "www" domain`, () =>
{
	expect( stripWWW("www.com") ).to.equal("www.com");
	expect( stripWWW("www.") ).to.equal("www.");
});



it(`doesn't remove a "www" top-level domain`, () =>
{
	expect( stripWWW("www") ).to.equal("www");
});



it(`erroneously removes a "www" domain`, () =>
{
	expect( stripWWW("www.co.uk") ).to.equal("co.uk");
});
