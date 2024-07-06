import PropTypes from 'prop-types';

const Wantcook = ({wantcook}) => {
    const {recipe_name, preparing_time, calories } = wantcook;
    return (
        <div className='flex justify-between bg-[#28282810] p-4'>
            <h3>{recipe_name}</h3>
            <a href="">{preparing_time}</a>
            <a href="">{calories}</a>
            <button className='text-[#150B2B] bg-[#0BE58A] rounded-full p-2'>Preparing</button>
        </div>
    );
};

Wantcook.propTypes = {
    wantcook: PropTypes.object
}

export default Wantcook;