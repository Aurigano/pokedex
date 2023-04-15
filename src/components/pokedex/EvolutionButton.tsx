import React from "react";
import { styled } from "@mui/material";
import EvolutionModal from "./EvolutionModal";
import GET_EVOLUTION from "@/queries/getEvolutions";
import { useLazyQuery } from "@apollo/client";

const StyledDiv = styled("div")(
	(props) => `
        @keyframes slideInLeft {
            0% {
            transform: translateX(0);
            }
            100% {
            transform: translateX(15px);
            }
        }

        @keyframes slideInRight {
            0% {
            transform: translateX(15px);
            }
            100% {
            transform: translateX(0);
            }
        }

        @keyframes fade-out{
            0%{
              opacity: 1.0
            }
            100{
              opacity: 0.0
            }
        }

        @keyframes fade-in{
            0%{
              opacity: 0.0
            }
            100{
              opacity: 1.0
            }
        }

        :hover{
            background-color: #DB4839;
            .box-label {
                animation-name: slideInLeft;
                animation-duration: 200ms;
                animation-fill-mode: both;
                animation-timing-function: ease-in-out;
                animation-iteration-count: 1;
            }
            .poke-icon {
                opacity: 1;
                display: block;
                animation-name: fade-in;
                animation-duration: 200ms;
                animation-fill-mode: both;
                animation-timing-function: ease-in-out;
                animation-iteration-count: 1;
            }
        }

        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #4C7EC4;
        clip-path: polygon(0 0,100% 0,100% 100%,35px 100%,0 calc(100% - 35px));
        color: #FFF;
        // margin: 36px;
        // padding: 12px;
        // flex-basis: calc(50% - 100px);
        height: 72px;
        border-radius: 5px;
        min-width: 225px;
        cursor: pointer;
        max-width: 230px;
        margin: auto;
        .box-label {
            font-size: 18px !important;
            font-weight: 400;
            letter-spacing: 0.5px;
            // animation reverse
            animation-name: slideInRight;
            animation-duration: 200ms;
            animation-fill-mode: both;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
            margin-right: 28px;
        }
        .poke-icon {
            width: 32px;
            // display: none;
            opacity: 0;
            animation-name: fade-out;
            animation-duration: 200ms;
            animation-fill-mode: both;
            animation-timing-function: ease-in-out;
            animation-iteration-count: 1;
        }
    `
);

type PropType = { id: string; number: string; image: string };

const EvolutionButton = ({ id, number, image }: PropType) => {
	const [open, setOpen] = React.useState(false);

	const [getEvolution, { loading, error, data }] = useLazyQuery(
		GET_EVOLUTION,
		{
			notifyOnNetworkStatusChange: true,
			fetchPolicy: "network-only",
			variables: { id },
		}
	);
	const handleOpen = () => {
		setOpen(true);
		getEvolution();
	};

	const dataWithNumber = { ...data, number, image };
	const handleClose = () => setOpen(false);
	return (
		<>
			<StyledDiv onClick={handleOpen}>
				<img
					src="/pokeball.png"
					className="poke-icon"
					alt="poke-icon"
				/>
				<p className="box-label">Evolute</p>
			</StyledDiv>
			<EvolutionModal
				open={open}
				handleClose={handleClose}
				data={dataWithNumber}
				error={error}
				loading={loading}
			/>
		</>
	);
};

export default EvolutionButton;
