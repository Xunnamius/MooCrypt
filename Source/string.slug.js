/*
---
description: String slug conversion.
license: MIT-style
authors: [Christopher Pitt]
provides: [String.toSlug]
requires: 
  core/1.2.4: [String]
...
*/

(function() {

	// A special thanks to the MooTools more team who
	// compiled this extensive list of character replacements.

	var special = {
		'a': ['�', '�', '�', '�', '�', '�', 'a', 'a'],
		'A': ['�', '�', '�', '�', '�', '�', 'A', 'A'],
		'c': ['c', 'c', '�'],
		'C': ['C', 'C', '�'],
		'd': ['d', 'd'],
		'D': ['D', '�'],
		'e': ['�', '�', '�', '�', 'e', 'e'],
		'E': ['�', '�', '�', '�', 'E', 'E'],
		'g': ['g'],
		'G': ['G'],
		'i': ['�', '�', '�', '�'],
		'I': ['�', '�', '�', '�'],
		'l': ['l', 'l', 'l'],
		'L': ['L', 'L', 'L'],
		'n': ['�', 'n', 'n'],
		'N': ['�', 'N', 'N'],
		'o': ['�', '�', '�', '�', '�', '�', 'o'],
		'O': ['�', '�', '�', '�', '�', '�'],
		'r': ['r', 'r'],
		'R': ['R', 'R'],
		's': ['�', 's', 's'],
		'S': ['�', 'S', 'S'],
		't': ['t', 't', 't'],
		'T': ['T', 'T', 'T'],
		'u': ['�', '�', '�', '�', 'u', '�'],
		'U': ['�', '�', '�', '�', 'U'],
		'y': ['�', '�'],
		'Y': ['�', '�'],
		'z': ['�', 'z', 'z'],
		'Z': ['�', 'Z', 'Z'],
		'th': ['�'],
		'TH': ['�'],
		'dh': ['�'],
		'DH': ['�'],
		'ss': ['�'],
		'oe': ['�'],
		'OE': ['�'],
		'ae': ['�'],
		'AE': ['�'],
		' ': ['[\xa0\u2002\u2003\u2009]'],
		'*': ['\xb7'],
		'\'': ['[\u2018\u2019]'],
		'"': ['[\u201c\u201d]'],
		'...': ['\u2026'],
		'-': ['\u2013'],
		'--': ['\u2014'],
		'&raquo;': ['\uFFFD']
	};

	function walk(string, replacements)
	{
		var result = string;

		Hash.each(replacements, function(value, key) {
			Array.each(value, function(check) {
				result = result.replace(new RegExp(check, 'g'), key);
			});
		});

		return result;
	}

	function slug(string)
	{
		return walk(string, special)
			.replace(/\s+/g, '-')
			.toLowerCase()
			.replace(/[^a-z0-9\-]/g, '');
	}

	String.implement({
		'toSlug': function()
		{
			return slug(this);
		} 
	});

})();