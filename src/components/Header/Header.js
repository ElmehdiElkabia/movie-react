// import React from 'react';
// import './Header.css';

// export default function Header(props) {
//  const { searchQuery, setSearchQuery, onSearch } = props;

//  return (
//     <header>
//       <div className='search'>
//         <input
//           type="text"
//           placeholder='Search for a movie'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <i className='bx bx-search' onClick={onSearch}></i>
//       </div>
//     </header>
//  );
// }
import React from 'react';
import './Header.css';

export default function Header(props) {

    return (
        <header>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search"
                    onChange={(e) => props.dataCity(e.target.value)}
                />
                <i className="bx bx-search" onClick={props.Search}></i>
            </div>
        </header>
    );
}
