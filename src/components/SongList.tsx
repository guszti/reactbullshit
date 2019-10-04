import React from "react";
import {connect} from "react-redux";
import {Song, StoreState} from "../types";
import {selectSong} from "../actions";

type DispatchProps = {
    selectSong: typeof selectSong;
};

type Props = StoreState & DispatchProps;

class SongList extends React.Component<Props, StoreState> {
    private renderList() {
        return this.props.songs.map((song: Song) => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = (state: StoreState) => {
    console.log(state);
    return {
        songs: state.songs,
        selectedSong: state.selectedSong
    };
};

export default connect(mapStateToProps, {selectSong})(SongList);