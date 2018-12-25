import { shallowMount } from "@vue/test-utils";
import SignUp from 'components/user/SignUp';
import SignIn from 'components/user/SignIn';
import UsersShow from 'components/user/Show';

describe('Users pages', () => {
    it('should render User SignUp', () => {
        const wrapper = shallowMount(SignUp);
        expect(wrapper).not.toBeNull();
    });

    it('should render User SignIn', () => {
        const wrapper = shallowMount(SignIn);
        expect(wrapper).not.toBeNull();
    });

    it('should render User Show page', () => {

        const $route = {
            path: '/users/1'
        }

        const wrapper = shallowMount(UsersShow, {
            mocks: {
              $route
            }
        });
        expect(wrapper).not.toBeNull();
    });
});