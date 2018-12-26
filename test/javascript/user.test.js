import { shallowMount } from "@vue/test-utils";
import SignUp from 'components/user/SignUp';
import SignIn from 'components/user/SignIn';
import UsersShow from 'components/user/Show';
import MyPages from 'components/user/MyPages';
import Edit from 'components/user/Edit';
import CheckOut from 'components/user/CheckOut';
import Store from 'store/store';

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

    it('should render User mypages', () => {

        const $store = Store;

        const wrapper = shallowMount(MyPages, {
            mocks: {
                $store
              }
        });
        expect(wrapper).not.toBeNull();
    });

    it('should render User Edit', () => {

        const $store = Store;

        const wrapper = shallowMount(Edit, {
            mocks: {
                $store
              }
        });
        expect(wrapper).not.toBeNull();
    });
});