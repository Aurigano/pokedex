import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled, Button } from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import ArrowBackIosNewSharpIcon from "@mui/icons-material/ArrowBackIosNewSharp";

const StyledDiv = styled("div")(
	(props) => `
    display: flex;
    max-width: 1280px;
    height: 100%;
    justify-content: space-between;
	.prev-btn, .next-btn {
		color: #212121;
		text-decoration: none;
		text-transform: capitalize;
		font-family: 'Inter';
		font-size: 16px;
		border-radius: 20px;
		padding: 6px 18px;
	}
	.prev-btn:hover, .next-btn:hover {
        // border: 1px solid black;
        box-shadow:inset 0px 0px 0px 1px black;
    }
`
);

const PageHandler = ({ page }: { page: string | undefined }) => {
	const pageNumber = parseInt(page || "1");
	const router = useRouter();
	return (
		<StyledDiv>
			<Button
				onClick={() => router.push(`/${pageNumber - 1}`)}
				disabled={!(pageNumber - 1)}
				startIcon={<ArrowBackIosNewSharpIcon />}
				className="prev-btn"
			>
				Previous
			</Button>
			<Button
				onClick={() => router.push(`/${pageNumber + 1}`)}
				endIcon={<ArrowForwardIosSharpIcon />}
				className="next-btn"
				// disabled={!!(pageNumber - 1)}
			>
				Next
			</Button>
		</StyledDiv>
	);
};

export default PageHandler;
