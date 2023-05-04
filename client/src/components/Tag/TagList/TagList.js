import React, { useContext } from 'react';
import TagItem from '../TagItem/TagItem';
import{SchoolInfoContext} from '../../../App'

const TagList = ({filterValue}) => {
  const schoolInfo = useContext(SchoolInfoContext);
  return (
    <div>
      {schoolInfo.map((it)=>(
                <TagItem
                filterValue = {filterValue}
                key={it.schoolUniqueId} {...it}
                />
            ))}
    </div>
  );
};

export default TagList;