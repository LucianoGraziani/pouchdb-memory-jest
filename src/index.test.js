import PouchDB from 'pouchdb-memory';

describe('pouchdb-memory', () => {
	it('doesn\'t fail', () => {
		expect(PouchDB).toBeDefined();
	});
});
