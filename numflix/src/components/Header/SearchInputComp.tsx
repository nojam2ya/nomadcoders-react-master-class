import { SearchBox } from '@src/components/Header/style';
import { useAnimation, motion } from 'framer-motion';
import { useState } from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IForm {
  keyword: string;
}

const SearchInputComp = () => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const { register, handleSubmit, reset } = useForm<IForm>();

  const toogleSearchOpen = () => {
    if (searchOpen) {
      inputAnimation.start({ scaleX: 0 });
      setSearchOpen(false);
    } else {
      inputAnimation.start({ scaleX: 1 });
      setSearchOpen(true);
    }
  };

  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
    reset();
    setSearchOpen(false);
  };

  const onInvalid = (errors: FieldErrors<IForm>) => {
    const [error] = Object.values(errors);
    console.log(error.message);
  };

  return (
    <SearchBox onSubmit={handleSubmit(onValid, onInvalid)}>
      <motion.input
        type="text"
        placeholder="Search for movie or tv show..."
        initial={{ scaleX: 0 }}
        animate={inputAnimation}
        // animate={{
        //   scaleX: searchOpen ? 1 : 0,
        // }}
        transition={{ type: 'linear' }}
        {...register('keyword', {
          required: '필수 값입니다.',
          minLength: {
            value: 2,
            message: '최소 2글자 이상 작성해주세요.',
          },
        })}
      />
      <button type="button" onClick={toogleSearchOpen}>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          animate={{ x: searchOpen ? -205 : 0 }}
          transition={{ type: 'linear' }}
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </motion.svg>
      </button>
    </SearchBox>
  );
};
export default SearchInputComp;
