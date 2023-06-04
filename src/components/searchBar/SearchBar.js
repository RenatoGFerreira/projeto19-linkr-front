import { DebounceInput } from "react-debounce-input";
import { DropBox, SearchBarBox, UserColumn } from "./Style";
import FoundUserBox from "./FoundUserBox";
import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchBar() {

    const [search, setSearch] = useState("");
    const [userList, setUserList] = useState([]);

    function handleInput(event) {
        getUsers(event);
    }

    async function getUsers(event) {
        const body = { searchKey: event };

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/search`, body);
            setUserList(res.data);

        } catch (error) {
            console.log(error.response.data);
        }

    };

    return (
        <SearchBarBox>
            <DropBox>
                <DebounceInput
                    type="search"
                    placeholder="Search People"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value)
                        handleInput(e.target.value)
                    }}
                    minLength={3}
                    debounceTimeout={300}>
                </DebounceInput>
                <UserColumn>
                    {userList.map(l => <FoundUserBox
                        key={l.id}
                        username={l.username}
                        image={l.image} />)}
                </UserColumn>
            </DropBox>
        </SearchBarBox>
    );
}