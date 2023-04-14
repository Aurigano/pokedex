import React from "react";
import { styled } from "@mui/material";
import colorDecider from "@/utils/colorDecider";

type PropType = {
	data: string[];
	size?: string;
};

interface PokeTypeProps {
	size: string;
}

const StyledDiv = styled("div")<PokeTypeProps>(
	({ size }) => `
        display: flex;
        flex-wrap: wrap;
        ${size === "large" ? "justify-content: center;" : ""}
        .typeDiv{
            width: ${size === "large" ? "200px" : "100px"};
            border-radius: ${size === "large" ? "20px" : "4px"};
            text-align: center;
            font-size: ${size === "large" ? "16px" : "11px"};
            padding: ${size === "large" ? "7px 0" : "3px 0"};
            margin-right: ${size === "large" ? "10px" : "5px"};
            font-weight: ${size === "large" ? "400" : "500"};
            ${
				size === "large"
					? "flex-basis: calc(42% - 10px); margin-bottom: 10px;"
					: ""
			}

        }
        .Grass {
            color: #212121;
            background: #9bcc50;
        }
        .Poison {
            color: #FFFFFF;
            background: #b97fc9;
        }
        .Fire {
            color: #FFFFFF;
            background: #fd7d24;
        }
        .Flying {
            color: #212121;
            background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)
        }
        .Water {
            color: #FFFFFF;
            background: #4592c4;
        }
        .Bug {
            color: #FFFFFF;
            background: #729f3f;
        }
        .Normal {
            color: #212121;
            background: #c9c9c9;
        }
        .Electric {
            color: #212121;
            background: #eed535;
        }
        .Ground {
            color: #212121;
            background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
        }
        .Fairy {
            color: #212121;
            background: #fdb9e9;
        }
        .Fighting {
            color: #FFFFFF;
            background: #d56723;
        }
        .Psychic {
            color: #FFFFFF;
            background: #f366b9;
        }
        .Rock {
            color: #FFFFFF;
            background: #a38c21;
        }
        .Steel {
            color: #212121;
            background: #9eb7b8;
        }
        .Ice {
            color: #212121;
            background: #51c4e7;
        }
        .Ghost {
            color: #FFFFFF;
            background: #7b62a3;
        }
        .Dragon {
            color: #FFFFFF;
            background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        }
    `
);

const PokemonType = ({ data, size }: PropType) => {
	return (
		<StyledDiv size={size || "small"}>
			{data.map((PokeType) => (
				<div className={colorDecider(PokeType) + " typeDiv"}>
					{PokeType}
				</div>
			))}
		</StyledDiv>
	);
};

export default PokemonType;
