import mutations from '../mutations';

describe('mutations', () => {
    it('can set notifications', () => {
        let state = {
            notifications: [

            ]
        };

        mutations.SET_NOTIFICATIONS(state, [ { id: 1 }]);

        expect(state.notifications.length).toEqual(1);
    });
});