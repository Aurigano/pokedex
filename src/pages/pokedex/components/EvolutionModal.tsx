import React from "react";
import { styled } from "@mui/material";
import { Modal, Skeleton } from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { EvolutionType } from "@/@types/types";
import Link from "next/link";

const ModalDiv = styled("div")`
	width: 580px;
	background: #fff;
	position: absolute;
	top: calc(50% + 45px);
	left: calc(50% + 290px);
	@media only screen and (max-width: 1000px) {
		left: calc(50%);
	}
	transform: translate(-50%, -50%);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-radius: 5px;
	padding: 10px 10px 50px 10px;
	.add-dialog {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}
	.modal-heading {
		font-size: 20px;
		font-weight: 500;
	}
	.close-icon {
		// width: 18px;
		opacity: 0.6;
		cursor: pointer;
		margin-left: auto;
		// margin: 10px 10px 0 0;
	}
	.close-btn {
		margin-left: auto;
	}

	.create-btn {
		font-family: "Work Sans";
		text-transform: none;
		background: #4ab7ff;
		color: #fff;
		width: 250px;
		border-radius: 12px;
		padding: 10px;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.75;
		letter-spacing: 0.02857em;
		:hover {
			outline: 2px solid #4ab7ff;
			outline-offset: -2px;
			color: #4ab7ff !important;
			background: transparent;
		}
	}
	button {
		background: transparent;
		border: none;
	}
	button:disabled,
	button[disabled] {
		pointer-events: none;
		cursor: default;
		color: rgba(0, 0, 0, 0.26);
	}
	button:hover {
		cursor: pointer;
	}
	.evo-card-wrapper {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		padding: 0 10px;
		gap: 15px;
	}
	.evolution-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
	}
	.poke-name {
		color: #10222f;
		font-size: 18px;
		font-weight: 500;
	}
	.poke-number {
		font-size: 12px;
		// color: #878787;
		color: #9199ac;
		font-weight: 700;
	}
	.image-class {
		width: 150px;
		height: 150px;
		object-fit: contain;
		margin-bottom: 15px;
	}
	.divider {
		background-color: #e1d8d8;
		border-radius: 5px;
		width: 30px;
		height: 2px;
		:last-child {
			display: none;
		}
	}
`;

type evolutionType = {
	open: boolean;
	handleClose: () => void;
	data: EvolutionType;
	error: { message: string } | undefined;
	loading: boolean;
};

const EvolutionModal = ({
	open,
	handleClose,
	data,
	error,
	loading,
}: evolutionType) => {
	console.log("from modal", data, loading);

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			hideBackdrop={true}
		>
			<ModalDiv className="modal-div">
				<div className="add-dialog">
					<button onClick={handleClose} className="close-btn">
						<CloseSharpIcon className="close-icon" />
					</button>
					{/* {loading && <p className="modal-heading">Loading...</p>} */}
					{error && <p className="modal-heading">{error.message}</p>}
					{!data?.pokemon?.evolutions && !loading && (
						<p className="modal-heading">
							This Pokemon doesn't evolves
						</p>
					)}
					{data?.pokemon?.evolutions && (
						<div className="evo-card-wrapper">
							<div className="evolution-card">
								{loading ? (
									<Skeleton
										variant="rounded"
										animation="wave"
										width={150}
										height={150}
										className="image-class"
									/>
								) : (
									<img
										src={data?.image}
										className="image-class"
										alt={data?.pokemon?.name}
									/>
								)}
								{loading ? (
									<Skeleton
										variant="text"
										animation="wave"
										width={40}
										sx={{ fontSize: "12px" }}
									/>
								) : (
									<p className="poke-number">
										#{data?.number}
									</p>
								)}
								{loading ? (
									<Skeleton
										variant="text"
										animation="wave"
										width={100}
										sx={{ fontSize: "18px" }}
									/>
								) : (
									<p className="poke-name">
										{data?.pokemon?.name}
									</p>
								)}
							</div>
							<div className="divider" />
							{data?.pokemon?.evolutions.map((evolution) => (
								<>
									<Link
										href={{
											pathname: `/pokedex/${evolution?.id}`,
										}}
										className="evolution-card"
										onClick={handleClose}
									>
										{loading ? (
											<Skeleton
												variant="rounded"
												animation="wave"
												width={150}
												height={150}
												className="image-class"
											/>
										) : (
											<img
												src={evolution?.image}
												className="image-class"
												alt={evolution?.name}
											/>
										)}
										{loading ? (
											<Skeleton
												variant="text"
												animation="wave"
												width={40}
												sx={{ fontSize: "12px" }}
											/>
										) : (
											<p className="poke-number">
												#{evolution?.number}
											</p>
										)}
										{loading ? (
											<Skeleton
												variant="text"
												animation="wave"
												width={100}
												sx={{ fontSize: "18px" }}
											/>
										) : (
											<p className="poke-name">
												{evolution?.name}
											</p>
										)}
									</Link>
									<div className="divider" />
								</>
							))}
						</div>
					)}
				</div>
			</ModalDiv>
		</Modal>
	);
};

export default EvolutionModal;
