import PropTypes from 'prop-types';

const Wantcook = ({wantcook}) => {
    const {recipe_name, preparing_time, calories } = wantcook;
    return (
        <div className='bg-[#28282810] p-4 m-4'>
            <h3>{recipe_name}</h3>
            <a href="">{preparing_time}</a>
            <a href="">{calories}</a>
        </div>
    );
};

Wantcook.propTypes = {
    wantcook: PropTypes.object
}

export default Wantcook;