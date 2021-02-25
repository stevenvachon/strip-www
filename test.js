"use strict";
const {expect} = require("chai");
const stripWWW = require("./");



it(`removes a "www" subdomain from punycode encoded hostnames`, () =>
{
	expect( stripWWW("www.domain.com") ).to.equal("domain.com");
	expect( stripWWW("www.domain.co.uk") ).to.equal("domain.co.uk");

	const {hostname} = new URL("http://www.ᄯᄯᄯ.com");
	expect(hostname).to.equal("www.xn--brdaa.com");
	expect( stripWWW(hostname) ).to.equal("xn--brdaa.com");
});



it(`doesn't remove a "www" subdomain from non-punycode encoded hostnames`, () =>
{
	expect( stripWWW("www.ᄯᄯᄯ.com") ).to.equal("www.ᄯᄯᄯ.com");
});



it(`doesn't remove a non-"www" subdomain`, () =>
{
	expect( stripWWW("www2.domain.com") ).to.equal("www2.domain.com");
	expect( stripWWW("wwww.domain.com") ).to.equal("wwww.domain.com");
});



it(`doesn't remove multiple "www" subdomains`, () =>
{
	expect( stripWWW("www.www.domain.com") ).to.equal("www.domain.com");
	expect( stripWWW("www.www.com") ).to.equal("www.com");
});



it(`doesn't remove a "www" domain`, () =>
{
	expect( stripWWW("www.com") ).to.equal("www.com");
	expect( stripWWW("www.www") ).to.equal("www.www");
});



it(`doesn't remove a "www" top-level domain`, () =>
{
	expect( stripWWW("www") ).to.equal("www");
});



it("supports edge cases", () =>
{
	expect( stripWWW("www.") ).to.equal("www.");
	expect( stripWWW(".com") ).to.equal(".com");
	expect( stripWWW("com") ).to.equal("com");
	expect( stripWWW("localhost") ).to.equal("localhost");
	expect( stripWWW("127.0.0.1") ).to.equal("127.0.0.1");
});
